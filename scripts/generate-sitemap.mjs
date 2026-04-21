import { writeFileSync } from "fs";

const DOMAIN = "https://imageconverters.net";

const urls = [
  "/",
  "/avif-to-jpg",
  "/avif-to-png",
  "/avif-to-webp",
  "/bmp-to-jpg",
  "/bmp-to-png",
  "/gif-to-jpg",
  "/gif-to-png",
  "/heic-to-jpg",
  "/heic-to-png",
  "/heic-to-webp",
  "/ico-to-png",
  "/jpg-to-gif",
  "/jpg-to-ico",
  "/jpg-to-png",
  "/jpg-to-webp",
  "/pdf-to-jpg",
  "/pdf-to-png",
  "/png-to-gif",
  "/png-to-ico",
  "/png-to-jpg",
  "/png-to-webp",
  "/svg-to-jpg",
  "/svg-to-png",
  "/svg-to-webp",
  "/tiff-to-jpg",
  "/tiff-to-png",
  "/webp-to-gif",
  "/webp-to-jpg",
  "/webp-to-png",
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
