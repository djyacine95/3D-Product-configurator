# Configura3D

Lead-generation site for a **3D Product Configurator / Interactive Web Solutions** practice.

## Run locally

```bash
npm ci
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build and deploy

This is a client-side Vite app with no platform-specific runtime requirements.

```bash
npm ci
npm run build
```

Deploy the generated `dist/` directory to any static host. For a Node-based
host, run `npm start`; the preview server honors the host's `PORT` environment
variable and falls back to port `5173`.

## What the site does

- Explains the five cost drivers (assets, catalog size, rules, integration, business functions)
- Shows Starter and Professional packages as starting ranges
- Walks through a typical six-week project
- Sells retainers after launch (not only the build)
- Collects a product brief; indicative range updates as the form is filled
- Opens a mail draft to `hello@configura3d.com` (change this in `src/lib/brief.ts`)
- Briefs are also stored in the browser under `configura3d-leads`

## Stack

React, Vite and TypeScript, with links to four live product configuration examples.
