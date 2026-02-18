# Script untuk Compress Project (Tanpa node_modules)
# Jalankan script ini di PowerShell

# Lokasi folder project
$sourceFolder = "C:\Users\LENOVO\Desktop\aneka-elektronik\aneka_elektronik"

# Lokasi file ZIP hasil
$zipFile = "C:\Users\LENOVO\Desktop\aneka-elektronik-frontend.zip"

# Hapus ZIP lama jika ada
if (Test-Path $zipFile) {
    Remove-Item $zipFile -Force
    Write-Host "✓ Menghapus ZIP lama..." -ForegroundColor Yellow
}

Write-Host "📦 Mulai compress project..." -ForegroundColor Cyan
Write-Host "⏳ Mohon tunggu..." -ForegroundColor Yellow

# Buat temporary folder
$tempFolder = "$env:TEMP\aneka_elektronik_temp"
if (Test-Path $tempFolder) {
    Remove-Item $tempFolder -Recurse -Force
}
New-Item -ItemType Directory -Path $tempFolder | Out-Null

# Copy semua file KECUALI node_modules dan dist
Write-Host "📋 Menyalin file..." -ForegroundColor Cyan
robocopy $sourceFolder $tempFolder /E /XD node_modules dist .git /XF *.log /NFL /NDL /NJH /NJS

# Compress
Write-Host "🗜️  Compressing..." -ForegroundColor Cyan
Compress-Archive -Path "$tempFolder\*" -DestinationPath $zipFile -CompressionLevel Optimal -Force

# Hapus temporary folder
Remove-Item $tempFolder -Recurse -Force

# Cek ukuran file
$fileSize = (Get-Item $zipFile).Length / 1MB
Write-Host "`n✅ SELESAI!" -ForegroundColor Green
Write-Host "📁 File ZIP: $zipFile" -ForegroundColor White
Write-Host "📏 Ukuran: $([math]::Round($fileSize, 2)) MB" -ForegroundColor White
Write-Host "`n📤 Sekarang kirim file ZIP ini ke teman Anda!" -ForegroundColor Cyan
Write-Host "💡 Gunakan Google Drive, WeTransfer, atau Dropbox" -ForegroundColor Yellow

# Buka folder hasil
explorer.exe (Split-Path $zipFile)
