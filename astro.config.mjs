import { defineConfig } from "astro/config";
import pagefind from "astro-pagefind";
import { redirects } from "./src/redirects.js";

export default defineConfig({
  site: "https://frasertan.com",
  output: "static",
  build: {
    format: "directory",
  },
  redirects,
  integrations: [pagefind()],
});
