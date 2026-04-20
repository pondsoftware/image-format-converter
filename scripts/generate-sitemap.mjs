import { writeFileSync } from "fs";

const DOMAIN = "https://imageconverters.net";

const urls = [
  "/",
  "/heic-to-jpg",
  "/heic-to-png",
  "/webp-to-jpg",
  "/webp-to-png",
  "/avif-to-jpg",
  "/avif-to-png",
  "/svg-to-png",
  "/svg-to-jpg",
  "/png-to-jpg",
  "/jpg-to-png",
  "/png-to-webp",
  "/jpg-to-webp",
  "/gif-to-png",
  "/png-to-ico",
  "/jpg-to-ico",
  "/pdf-to-jpg",
  "/pdf-to-png",
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${DOMAIN}${url}</loc>
    <changefreq>monthly</changefreq>
    <priority>${url === "/" ? "1.0" : "0.8"}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

writeFileSync("public/sitemap.xml", sitemap);
console.log(`Sitemap generated: ${urls.length} URLs`);
