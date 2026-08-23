Write-Host "=== GIT STATUS ==="
git status --short

Write-Host "`n=== NODE ==="
node --version

Write-Host "`n=== NPM ==="
npm --version

Write-Host "`n=== TYPESCRIPT ==="
npx tsc --noEmit

Write-Host "`n=== LINT ==="
npm run lint

Write-Host "`n=== BUILD ==="
npm run build