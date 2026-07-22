$prs = gh search prs --author Raphasha27 --state open --json url,repository | ConvertFrom-Json

foreach ($pr in $prs) {
    $repo = $pr.repository.nameWithOwner
    if ($repo -notmatch "^Raphasha27/") {
        Write-Output "Skipping $repo (not owned by Raphasha27)"
        continue
    }

    Write-Output "Processing PR $($pr.url) in $repo..."

    # Check if archived
    $isArchived = (gh api repos/$repo --jq '.archived') -eq "true"
    if ($isArchived) {
        Write-Output "  Unarchiving $repo..."
        gh repo unarchive $repo --yes
    }

    # Disable enforce_admins (ignore errors if it wasn't enabled)
    Write-Output "  Disabling enforce_admins..."
    gh api -X DELETE repos/$repo/branches/main/protection/enforce_admins 2>$null
    gh api -X DELETE repos/$repo/branches/master/protection/enforce_admins 2>$null

    # Merge PR
    Write-Output "  Merging PR..."
    gh pr merge $pr.url --admin --merge

    # Re-enable enforce_admins
    Write-Output "  Re-enabling enforce_admins..."
    gh api -X POST repos/$repo/branches/main/protection/enforce_admins 2>$null
    gh api -X POST repos/$repo/branches/master/protection/enforce_admins 2>$null

    if ($isArchived) {
        Write-Output "  Re-archiving $repo..."
        gh repo archive $repo --yes
    }

    Write-Output "  Done with PR $($pr.url)"
}
