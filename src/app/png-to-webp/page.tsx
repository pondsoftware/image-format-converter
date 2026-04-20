import ImageConverter from "@/components/ImageConverter";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PNG to WebP Converter — Optimize Images for Web Free",
  description:
    "Convert PNG images to WebP for 25-35% smaller files with the same quality. Free, private, browser-based. No upload required.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "PNG to WebP Converter",
  url: "https://imageconverters.net/png-to-webp",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Convert PNG images to WebP format for smaller file sizes. Runs entirely in your browser — no files are uploaded.",
};

export default function PngToWebpPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://imageconverters.net" },
              { "@type": "ListItem", "position": 2, "name": "PNG to WebP Converter", "item": "https://imageconverters.net/png-to-webp" }
            ]
          })
        }}
      />
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            PNG to WebP Converter — Optimize Images for Web
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            WebP delivers the same visual quality as PNG at 25-35% smaller file
            sizes. Convert your PNG images to WebP to speed up your website and
            reduce bandwidth — instantly, for free, with no upload required.
          </p>
        </div>

        <ImageConverter />

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Why Convert PNG to WebP?
            </h2>
            <p className="text-gray-600">
              WebP was developed by Google specifically for the web. It supports
              both lossy and lossless compression, transparency (alpha channel),
              and even animation. For websites, WebP images load faster because
              they&apos;re significantly smaller than equivalent PNGs. Google
              PageSpeed Insights and Core Web Vitals specifically recommend
              serving images in WebP format.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              WebP Browser Support
            </h2>
            <p className="text-gray-600">
              WebP is now supported by all major browsers including Chrome,
              Firefox, Safari, Edge, and Opera. As of 2024, over 97% of web
              users have a browser that supports WebP. The only exceptions are
              very old browser versions. For maximum compatibility, many
              websites serve WebP with a PNG or JPG fallback using the HTML
              picture element.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              WebP Quality Settings
            </h2>
            <p className="text-gray-600">
              Use the quality slider to control the compression level. For
              lossless conversion (identical to PNG), set quality to 100%. For
              web use, 80-90% quality produces visually identical results with
              much smaller file sizes. For thumbnails and previews, 70-80% is
              often sufficient. The converter shows you the file size reduction
              for each image so you can find the right balance.
            </p>
          </section>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-600 hover:underline text-sm">
            &larr; Back to Image Format Converter
          </Link>
        </div>
      </div>
    </>
  );
}
