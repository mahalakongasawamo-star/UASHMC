Write-Host "=== GIT STATUS ==="
git status --short

Write-Host "`n=== NODE ==="
node --version

Write-Host "`n=== SMOKE TEST ==="
npm test
