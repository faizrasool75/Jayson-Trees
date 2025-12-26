# PowerShell script to migrate repository
$ErrorActionPreference = "Stop"

Set-Location $PSScriptRoot

Write-Host "Checking git status..." -ForegroundColor Cyan
git status

Write-Host "`nStaging all changes..." -ForegroundColor Cyan
git add .

Write-Host "`nCommitting changes..." -ForegroundColor Cyan
git commit -m "Update CSS styles: h2 font-size to 36px, mobile menu to semi-bold"

Write-Host "`nRemoving old remote..." -ForegroundColor Cyan
git remote remove origin

Write-Host "`nAdding new remote..." -ForegroundColor Cyan
git remote add origin https://github.com/faizrasool75/Jayson-Trees.git

Write-Host "`nPushing to new repository..." -ForegroundColor Cyan
git push -u origin main

Write-Host "`nDone! Project successfully pushed to new repository." -ForegroundColor Green
Write-Host "Repository: https://github.com/faizrasool75/Jayson-Trees.git" -ForegroundColor Green

Read-Host -Prompt "`nPress Enter to exit"

