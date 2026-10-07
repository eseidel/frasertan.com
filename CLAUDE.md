# frasertan.com

Fraser Tan's personal website: a home page, CV, personal projects, and a
collection of ~500 recipes. Built with [Astro](https://astro.build) as a static
site and deployed to GitHub Pages automatically on every push to `main`.

## Who you're working with

Usually **Fraser**, the site owner. She is not a software engineer, so:

- Talk in plain language about what changes on the _website_, not about files,
  frontmatter, or git, unless she asks.
- Don't ask her to run commands. You run everything.
- When something needs a decision (which category? keep the old photo?), ask
  one short question with a suggested default rather than a list of options.
- Before finishing, tell her in one or two sentences what will look different on
  the site, and give her the pull request link.

## How changes get published

1. Work on a branch (never commit straight to `main`; it is the live site).
2. Run the checks below and fix anything they report.
3. Commit, push, and open a pull request with a short, plain-English title
   ("Add Grandma's lemon bars", "Update CV with new role").
4. Fraser reviews and clicks **Merge**. About two minutes later the change is
   live at https://frasertan.com (the "Deploy to GitHub Pages" workflow).

If she asks you to merge it for her, that's fine once CI is green.

## Checks (run before every push)

```sh
npm run format      # Prettier: fixes formatting in place
npm run check       # astro check: validates recipe frontmatter + types
npm run build       # full static build, also builds the search index
```

CI (`.github/workflows/ci.yml`) runs `format:check`, `check`, and `build`.

To show Fraser a preview, `npm run dev` serves the site at
http://localhost:4321.

## Layout

- `src/content/recipes/*.md` – one Markdown file per recipe. The filename is the
  URL: `lemon-bars.md` → `/recipes/lemon-bars/`.
- `src/content.config.ts` – the recipe frontmatter schema.
- `src/pages/` – home (`index.astro`), `curriculum-vitae.astro`,
  `personal-projects.astro`, and the recipe/category/tag listing pages.
- `src/components/`, `src/layouts/`, `src/styles/global.css` – shared UI.
- `public/images/` – images, served at `/images/<name>`.
- `src/redirects.js` – redirects from old Weebly URLs (`/foo.html`). Don't
  remove these; old links around the web still point at them.
- `old/` and `scripts/convert.py` – the original Weebly scrape and the one-off
  converter. Archive only; don't edit.

## Recipe format

```markdown
---
title: "Lemon Bars"
description: "Short intro in Fraser's voice: where it's from, tips, what she changed."
yield: "Makes 16 bars"
categories:
  - Desserts
subcategories:
  - Crumbles, Cobblers, Buckles and Bars
tags:
  - Make Ahead
dietary:
  - GF
source:
  name: "Cook's Illustrated"
  url: "https://www.example.com/lemon-bars"
---

## Ingredients

1 cup flour
1/2 cup butter, softened

## Instructions

1. Heat oven to 350 degrees.

2. ...
```

- Only `title` and at least one `categories` entry are required.
- Ingredients are plain lines (no `-` bullets), matching existing recipes.
  Sub-groups use `### For the crust` style headings.
- Reuse existing names exactly; a typo creates a new category page. Check
  what's in use with
  `grep -h -A8 '^categories:' src/content/recipes/*.md | grep '^  - ' | sort | uniq -c`.
  - Main categories: Main Dishes, Desserts, Side Dishes, Salads, Soups and
    Stews, Breads and Baked Goods, Breakfast, Sauces and Dips, Starters,
    Drinks.
  - Tags: Weeknight Meals, Seasonal Treats, Make Ahead.
  - `dietary` codes: `GF` gluten-free, `DF` dairy-free, `EF` egg-free, `V`
    vegan. A trailing `*` (e.g. `GF*`) means "with a substitution noted in the
    recipe".
- Always keep attribution in `source` when a recipe comes from a book, site, or
  person.

The `/add-recipe` skill walks through adding one from a link, pasted text, or a
photo.
