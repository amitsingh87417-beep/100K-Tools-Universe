# 100K Tools Universe

Premium White + Blue responsive starter for mobile, tablet and desktop.

## What's included
- Searchable catalogue of 500 tool listings across 9 categories.
- Browser-based working tools for text, math, conversions, dates, JSON, URL/Base64, HTML escaping, binary, password-strength estimation, SHA-256, CSV/JSON, email-format checking, metadata text and more.
- Vite frontend for Vercel.
- Express API starter for Render with Helmet, CORS, rate limiting and health endpoint.

## Important accuracy note
The 500 launch entries are catalogue listings/presets, not 500 separately engineered algorithms. A number of listings share common engines. The initial core tools are functional; preset entries may use a shared/general engine and should be individually reviewed before claiming each as a distinct fully working tool. QR Text Payload prepares text but does not render a QR image. CSV support is intentionally simple and does not cover every quoted CSV edge case. Feedback API does not persist messages.

## Run locally
Requires Node.js 20+.
```bash
npm install
npm run dev
```
Open the Vite URL printed in your terminal. Run the API in another terminal:
```bash
npm run api
```
Test `http://localhost:4000/api/health`.

## Vercel frontend deployment
1. Upload this project to a GitHub repository.
2. In Vercel select Add New → Project and import the repository.
3. Framework: Vite; build command: `npm run build`; output directory: `dist`.
4. Deploy. `vercel.json` includes a fallback rewrite.

## Render API deployment
1. Create a Render Web Service from the same GitHub repository.
2. Build command: `npm install`; start command: `npm run api`.
3. Set `ALLOWED_ORIGIN` to your exact Vercel site URL.
4. Deploy and test `/api/health`.

## Supabase (optional next phase)
Supabase is not yet connected to the UI. Add it when accounts, synced favorites or saved history are required:
1. Create a Supabase project and tables such as `profiles`, `favorites`, and `tool_runs`.
2. Enable Row Level Security on all user-owned tables. Policies should restrict records to `auth.uid()`.
3. Frontend may contain only the project URL and anon/publishable key.
4. Never put the Supabase `service_role` key in frontend code. Keep privileged operations on Render in server-side environment variables.
5. Add privacy, retention and account-deletion controls before collecting personal data.

## Before public launch
Test every listing on desktop and mobile, add automated tests and accessibility checks, write privacy policy/terms/contact pages, and monitor abuse and errors. Do not advertise 100,000 available tools until they are implemented and verified.
