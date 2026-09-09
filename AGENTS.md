node_modules/next/dist/docs/

## Stack
- Next.js 16 with App Router (TypeScript)
- this web app only uses Static Site Generation

## File Conventions
- Server Components by default. Add "use client" only when you need browser APIs or interactivity.
- Route handlers go in app/api/[route]/route.ts
- Database queries run in lib/db.ts, never inline in components
- 
## Commands
- Dev server: npm run dev
- Type check: npx tsc --noEmit
- Build: npm run build
- 
## Proxy
- Middleware logic lives in proxy.ts, not middleware.ts (Next.js 16)

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
