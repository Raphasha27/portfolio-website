# Script to change all occurrences of #000814 (dark navy) to #000000 (pure black)
Get-ChildItem -Path "src", "index.html" -Recurse -Include "*.jsx", "*.html", "*.css" | ForEach-Object {
    $content = Get-Content -Path $_.FullName -Raw
    if ($content -match "#000814") {
        Write-Output "Updating file: $($_.FullName)"
        $content = $content -replace "#000814", "#000000"
        Set-Content -Path $_.FullName -Value $content -NoNewline
    }
}
