# Todo App (Next.js App Router)

A minimal Todo app implemented with Next.js 14 using the App Router.

## Scripts

- `npm run dev` — Start dev server on http://localhost:3000
- `npm run build` — Build for production
- `npm start` — Run production server

## Notes

- State is client-side only (no persistence). You can add persistence via localStorage or a backend later.
- App files:
  - `app/layout.tsx` — HTML shell and global layout
  - `app/page.tsx` — Home route rendering the todo UI
  - `components/TodoApp.tsx` — Client component with todo logic
  - `app/globals.css` — Basic styling

## Develop

1. Install deps: `npm install`
2. Run dev server: `npm run dev`
3. Open `http://localhost:3000`

