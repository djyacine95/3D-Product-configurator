# Configura3D

Lead-generation site for a **3D Product Configurator / Interactive Web Solutions** practice.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## What the site does

- Explains the five cost drivers (assets, catalog size, rules, integration, business functions)
- Shows Starter and Professional packages as starting ranges
- Walks through a typical six-week project
- Sells retainers after launch (not only the build)
- Collects a product brief; indicative range updates as the form is filled
- Opens a mail draft to `hello@configura3d.com` (change this in `src/lib/brief.ts`)
- Briefs are also stored in the browser under `configura3d-leads`

## Stack

React, Vite, TypeScript, Three.js (`@react-three/fiber`) for the live chair demo.
