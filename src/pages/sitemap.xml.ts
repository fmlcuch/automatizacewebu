import { getCollection } from "astro:content";

const site = "https://automatizacewebu.cz";

export async function GET() {
  const posts = await getCollection("blog", ({ data }) => !data.draft);

  const staticPages = [
    "",
    "/kontakt",
    "/ochrana-osobnich-udaju",
    "/blog",
    "/sluzby",
    "/obchodni-podminky",
    "/sluzby/oprava-diakritiky",
    "/sluzby/seo-metadata",
    "/sluzby/alt-texty",
    "/sluzby/ai-analytik",
    "/sluzby/propojeni-systemu",
    "/sluzby/ai-prolinkovani"
  ];

  const urls = [
    ...staticPages.map((path) => ({
      loc: `${site}${path || "/"}`,
      lastmod: new Date().toISOString()
    })),
    ...posts.map((post) => ({
      loc: `${site}/blog/${post.slug}`,
      lastmod: post.data.publishDate.toISOString()
    }))
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (item) => `  <url>
    <loc>${item.loc}</loc>
    <lastmod>${item.lastmod}</lastmod>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
