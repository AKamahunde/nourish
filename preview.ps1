$port = 8090
$root = Split-Path -Parent $MyInvocation.MyCommand.Path

$mimeTypes = @{
  '.html' = 'text/html; charset=utf-8'
  '.css'  = 'text/css; charset=utf-8'
  '.js'   = 'application/javascript; charset=utf-8'
  '.json' = 'application/json; charset=utf-8'
  '.svg'  = 'image/svg+xml'
  '.png'  = 'image/png'
  '.jpg'  = 'image/jpeg'
  '.jpeg' = 'image/jpeg'
  '.ico'  = 'image/x-icon'
}

$lanIp = (Get-NetIPAddress -AddressFamily IPv4 -ErrorAction SilentlyContinue |
  Where-Object { $_.InterfaceAlias -notmatch 'Loopback|vEthernet' -and $_.IPAddress -notlike '169.254.*' -and $_.IPAddress -ne '127.0.0.1' } |
  Select-Object -First 1 -ExpandProperty IPAddress)

$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Any, $port)
$listener.Start()

Write-Host ""
Write-Host "NourishTable local preview is running!" -ForegroundColor Green
Write-Host "  On this PC : http://localhost:$port"
if ($lanIp) {
  Write-Host "  On iPhone  : http://${lanIp}:$port  (same Wi-Fi)" -ForegroundColor Cyan
}
Write-Host "Press Ctrl+C to stop."
Write-Host ""

Start-Process "http://localhost:$port"

try {
  while ($true) {
    $client = $listener.AcceptTcpClient()
    try {
      $stream = $client.GetStream()
      $reader = [System.IO.StreamReader]::new($stream, [System.Text.Encoding]::ASCII, $false, 1024, $true)
      $requestLine = $reader.ReadLine()
      if ([string]::IsNullOrWhiteSpace($requestLine)) {
        $client.Close()
        continue
      }
      while ($true) {
        $line = $reader.ReadLine()
        if ([string]::IsNullOrEmpty($line)) { break }
      }
      $parts = $requestLine.Split(' ')
      $rawPath = if ($parts.Length -ge 2) { $parts[1] } else { '/' }
      $cleanPath = ($rawPath.Split('?')[0]).TrimStart('/')
      if ([string]::IsNullOrEmpty($cleanPath)) { $cleanPath = 'index.html' }

      $relPath = $cleanPath.Replace('/', '\')
      $fullPath = [System.IO.Path]::GetFullPath((Join-Path $root $relPath))
      if (Test-Path $fullPath -PathType Container) {
        $fullPath = Join-Path $fullPath 'index.html'
      }

      if ($fullPath.StartsWith($root, [System.StringComparison]::OrdinalIgnoreCase) -and (Test-Path $fullPath -PathType Leaf)) {
        $ext = [System.IO.Path]::GetExtension($fullPath).ToLowerInvariant()
        $mime = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { 'application/octet-stream' }
        $bytes = [System.IO.File]::ReadAllBytes($fullPath)
        $header = "HTTP/1.1 200 OK`r`nContent-Type: $mime`r`nCache-Control: no-cache, no-store, must-revalidate`r`nContent-Length: $($bytes.Length)`r`nConnection: close`r`n`r`n"
        $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($header)
        $stream.Write($headerBytes, 0, $headerBytes.Length)
        $stream.Write($bytes, 0, $bytes.Length)
      } else {
        $body = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
        $header = "HTTP/1.1 404 Not Found`r`nContent-Type: text/plain`r`nContent-Length: $($body.Length)`r`nConnection: close`r`n`r`n"
        $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($header)
        $stream.Write($headerBytes, 0, $headerBytes.Length)
        $stream.Write($body, 0, $body.Length)
      }
      $stream.Flush()
    } catch {
    } finally {
      $client.Close()
    }
  }
} finally {
  $listener.Stop()
}
