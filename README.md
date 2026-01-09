# Victorian Inventor's Workshop

A distinctive interactive workbench for a weekly coding diary, built with Astro, TypeScript, and Tailwind CSS.

## Features

- **Victorian-themed interactive workbench** - Navigate through content via clickable objects
- **Diary overlay** - Two-page spread book interface for browsing weekly entries
- **Content Collections** - Structured MDX content with validation
- **Week detail pages** - Individual pages for each week's entry
- **Smooth animations** - Vanilla JavaScript and CSS transforms for interactions

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Project Structure

```
/
├── public/
│   └── images/weeks/     # Hero images for weekly entries
├── src/
│   ├── components/       # Astro components
│   │   ├── Workbench.astro
│   │   ├── DiaryOverlay.astro
│   │   ├── BlueprintPanel.astro
│   │   ├── LetterPanel.astro
│   │   └── ToolsPanel.astro
│   ├── content/
│   │   ├── config.ts     # Content collection schema
│   │   └── weeks/        # Weekly MDX entries
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       └── week/[weekNumber].astro
```

## Adding Weekly Entries

Create a new `.mdx` file in `src/content/weeks/` with the following frontmatter:

```mdx
---
weekNumber: 3
dateRange: "Jan 19–25, 2026"
title: "Your Week Title"
subtitle: "A one-line description"
tags: ["Tag1", "Tag2", "Tag3"]
heroImage: "/images/weeks/week-03.svg"
buildUrl: "https://example.com/week-03"
---

Your MDX content here...
```

## Tech Stack

- **Astro** - Static site generator
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **MDX** - Rich markdown content
- **Astro Content Collections** - Structured content management

## Design Philosophy

The Victorian Inventor's Workshop theme creates a distinctive, memorable experience that stands out from typical portfolio sites. Each interactive object on the workbench serves a specific purpose, making navigation intuitive and engaging.

