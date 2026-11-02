# 100K Tools Universe — v2.1.0

A responsive browser-based utility catalogue with 1,000 searchable tool configurations.

## Included in this update

- 1,000 searchable tool listings across 10 categories.
- 90+ named utility families and workflow variants. Related variants intentionally share browser-side engines; this is not a claim of 1,000 separate algorithms.
- Working browser-side tools for text cleanup and analysis, calculators, date helpers, unit conversions, JSON/CSV, encoding/decoding, URL utilities, password generation, SHA-256, UUIDs, Morse/NATO, Roman numerals and more.
- Search, category filters, A–Z sorting and favorites.
- Recently opened tools and local result history (stored in the current browser using localStorage).
- Copy and download result actions.
- Keyboard shortcuts: Ctrl/Cmd + K focuses search; Escape returns from a tool.
- Responsive white-and-blue interface for mobile, tablet and desktop.

## Run locally

1. Install Node.js 20 or later.
2. Open this project folder in a terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL printed by Vite.

## Deploy to Vercel

1. Upload this folder to a Git repository.
2. Import the repository in Vercel.
3. Framework preset: Vite.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy.

`vercel.json` includes an SPA rewrite.

## Important scope and privacy notes

- The included utilities run in the browser; no API key or backend is required for these features.
- Favorites, recent tools and result history stay in the browser's localStorage on that device/browser. They do not sync between devices.
- This release provides 1,000 usable tool listings/configurations powered by shared utility engines. A listing variant is not a separate algorithm.
- Some tools accept simplified CSV input; complex quoted CSV files should be handled with a dedicated CSV parser before using in production.
- Email validation checks syntax only; it does not verify mailbox existence.
- Password strength is a basic local estimate, not a security audit. Never enter a real password into a website you do not trust.
- The QR text tool prepares payload text; it does not create a QR image.
- This is a front-end release. User accounts, cloud sync, admin publishing, server-side processing, analytics and monetization require separately implemented backend services.

## Project structure

- `index.html` — app entry and metadata
- `src/main.js` — tool catalogue, tool engines and UI interactions
- `src/styles.css` — responsive visual design
- `package.json` — Vite scripts and dependency
- `vercel.json` — SPA routing
