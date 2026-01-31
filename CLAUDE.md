# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
pnpm dev          # Start dev server
pnpm build        # Type check + build for production
pnpm preview      # Preview production build

# Code Quality
pnpm lint         # Run ESLint on .astro,.js,.jsx,.ts,.tsx files
pnpm format       # Format with Prettier (includes Astro plugin)
```

## Architecture

This is a personal portfolio site built with Astro 4, using React for interactive components and TailwindCSS for styling.

### Tech Stack
- **Astro 4** - Static site generator with component islands
- **React 18** - Used for interactive components (client-side hydration with `client:load`)
- **TailwindCSS** - Utility-first styling with custom colors (`pale`, `primary`)
- **astro-icon** - Icon integration using `@iconify-json/ri` (Remix Icons)
- **TypeScript** - Strict mode via `astro/tsconfigs/strict`

### Project Structure
- `src/layouts/Layout.astro` - Base layout with dark mode support (class-based via `darkMode: "class"`)
- `src/components/` - Reusable components (`.astro` for static, `.tsx` for interactive)
- `src/pages/` - File-based routing (index, work, projects, articles)

### Key Patterns
- Dark mode: Controlled via `localStorage` key `"theme"` and `dark` class on `<html>`
- React in Astro: Use `client:load` directive for hydration, pass Astro content via named slots
- Custom breakpoints: sm(480px), md(768px), lg(976px), xl(1440px)
