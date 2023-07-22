const url = 'https://ayush.gg';
const staticPages = Object.keys(
    import.meta.glob("/src/routes/**/+page.(svelte|md)")
  )
    .filter(
      (page) =>
        !["/src/routes/+page.svelte"].find((filter) => page.includes(filter))
    )
    .map((page) =>
      page
        .replace("/src/routes", url)
        .replace("/+page.svelte", ".html")
        .replace("/+page.md", ".html")
    );
export const prerender = true;

const lastmod = new Date().toISOString();

export async function GET() {
    return new Response(
      `
      <?xml version="1.0" encoding="UTF-8" ?>
      <urlset
        xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="https://www.w3.org/1999/xhtml"
        xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
      >
        <url>
        <loc>${url}</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
        <lastmod>${lastmod}</lastmod>
        </url>

        ${staticPages
            .map(
              (url) => `<url>
            <loc>${url}</loc>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
            <lastmod>${lastmod}</lastmod>
          </url>`
            )
            .join("")}

      </urlset>`.trim(),
      {
        headers: {
          'Content-Type': 'application/xml'
        }
      }
    );
  }