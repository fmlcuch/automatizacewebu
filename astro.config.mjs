import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://automatizacewebu.cz",
  base: "/",
  output: "static",
  trailingSlash: "never",
  integrations: [
    tailwind({
      applyBaseStyles: false
    })
  ],
  markdown: {
    shikiConfig: {
      theme: "github-light"
    }
  }
});
