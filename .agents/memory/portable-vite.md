---
name: Portable Vite hosting
description: Portability constraints for this Vite app across local, static, and Node-based hosts.
---

Keep the Vite app host-agnostic: do not hardcode Replit ports or hosts, let preview/server use `PORT` with a normal local fallback, and ensure the lockfile uses public registry URLs rather than workspace-internal mirrors.

**Why:** Workspace-generated Vite settings and npm lockfile URLs can make an otherwise standard static app fail outside the originating platform.

**How to apply:** Verify `npm ci`, `npm run build`, and `npm start` with a non-default `PORT` before treating hosting portability as complete.