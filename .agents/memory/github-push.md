---
name: GitHub push through Replit
description: How to publish project changes when the GitHub connector is attached but the shell remote has no Git credentials.
---

When the GitHub connector is attached, the local HTTPS remote may still reject `git push` because connector credentials are not installed as shell credentials. Use the authenticated GitHub connector proxy and Git Data API to publish the current tracked tree instead.

**Why:** The connector authorizes API access without exposing a token or configuring a shell credential helper.

**How to apply:** Verify the target repository and default branch first, create blobs/tree/commit from the current tracked files, update the branch ref without force, then read the ref back to confirm the published commit.