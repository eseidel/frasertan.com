---
name: add-recipe
description: Add a new recipe (or update an existing one) on frasertan.com from a web link, pasted text, or a photo of a recipe card or cookbook page. Use whenever Fraser shares a recipe or asks to add, post, or change one.
---

# Add a recipe

Follow the recipe format and conventions in `CLAUDE.md`.

1. **Get the recipe.**
   - Link: fetch the page and pull out title, yield, ingredients, steps, and
     the source name/URL.
   - Photo: transcribe it carefully. If any quantity is unreadable, ask rather
     than guess.
   - Pasted text: use as-is.

2. **Check it isn't already on the site.** Search `src/content/recipes/` for
   the title and key words. If a close match exists, ask Fraser whether to
   update that one or add a new one.

3. **Ask only what you can't infer** (one short message): anything she wants
   in the intro/notes, and any changes she made to the original. Suggest the
   categories, tags, and dietary codes you plan to use so she can correct them.

4. **Write `src/content/recipes/<slug>.md`.** Slug is the lowercase title with
   hyphens (`peggys-blueberry-muffins`). Write instructions in your own words
   where they come from a published source, keep `source` attribution, and
   keep the intro in Fraser's voice (first person, warm, practical tips).

5. **Photo of the dish (optional):** save it to `public/images/<slug>.jpg`
   (resize to at most ~1600px wide) and reference it in the body with
   `![Lemon bars](/images/lemon-bars.jpg)`.

6. **Verify:** `npm run format && npm run check && npm run build`. Confirm the
   new page exists at `dist/recipes/<slug>/index.html`.

7. **Publish:** commit, push, open a PR titled "Add <Recipe Name>", and send
   Fraser the link with one line on where it will appear (e.g. "It'll show up
   under Desserts → Cookies once you merge").
