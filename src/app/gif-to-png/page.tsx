import ImageConverter from "@/components/ImageConverter";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GIF to PNG Converter — Convert GIF Images to PNG Free",
  description:
    "Convert GIF images to PNG format for better quality and transparency. Free, private, browser-based. No upload required.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "GIF to PNG Converter",
  url: "https://imageconverters.net/gif-to-png",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Convert GIF images to PNG format. Runs entirely in your browser — no files are uploaded.",
};

export default function GifToPngPage() {
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
              { "@type": "ListItem", "position": 2, "name": "GIF to PNG Converter", "item": "https://imageconverters.net/gif-to-png" }
            ]
          })
        }}
      />
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            GIF to PNG Converter — Convert Static GIFs to PNG
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Need to convert a GIF to PNG? Whether it&apos;s a static graphic, a
            logo, or the first frame of an animated GIF, drop your files below
            to convert them to high-quality PNG — instantly, for free, with no
            upload required.
          </p>
        </div>

        <ImageConverter />

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Why Convert GIF to PNG?
            </h2>
            <p className="text-gray-600">
              GIF is limited to 256 colors and uses a basic lossless compression
              algorithm. PNG supports millions of colors (24-bit) with full
              alpha transparency, producing sharper and more vibrant images.
              For static graphics, logos, icons, and screenshots, PNG is
              superior to GIF in every way — better color depth, better
              compression for most images, and smoother transparency edges.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              GIF vs PNG — Key Differences
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>GIF: max 256 colors — PNG: up to 16 million colors</li>
              <li>GIF: binary transparency (on/off) — PNG: full alpha channel (partial transparency)</li>
              <li>GIF: supports animation — PNG: static only (APNG for animation)</li>
              <li>GIF: larger files for complex images — PNG: better compression for most static graphics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Animated GIF Note
            </h2>
            <p className="text-gray-600">
              This converter extracts the first frame of animated GIFs and
              converts it to PNG. If you need to preserve animation, consider
              keeping the GIF format or converting to WebP (which supports
              animation with better compression). For static GIFs — such as
              logos, icons, and simple graphics — the PNG conversion will
              produce a higher-quality result with better color reproduction.
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
