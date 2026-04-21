import ImageConverter from "@/components/ImageConverter";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "JPG to PNG Converter — Add Transparency Support Free",
  description:
    "Convert JPG images to PNG format for transparency support and lossless quality. Free, private, browser-based. No upload required.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "JPG to PNG Converter",
  url: "https://imageconverters.net/jpg-to-png",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Convert JPG images to PNG format for transparency and lossless quality. Runs entirely in your browser — no files are uploaded.",
};

export default function JpgToPngPage() {
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
              { "@type": "ListItem", "position": 2, "name": "JPG to PNG Converter", "item": "https://imageconverters.net/jpg-to-png" }
            ]
          })
        }}
      />
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            JPG to PNG Converter — Add Transparency Support
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Need to convert a JPG to PNG? Whether you need transparency support,
            lossless quality for editing, or PNG format for a specific platform,
            drop your JPG files below to convert them instantly — for free, with
            no upload required.
          </p>
        </div>

        <ImageConverter />

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Why Convert JPG to PNG?
            </h2>
            <p className="text-gray-600">
              While JPG is great for photos due to its small file size, PNG
              offers several advantages. PNG supports transparency (alpha
              channel), uses lossless compression meaning no quality is lost
              when saving, and handles sharp edges and text better than JPG.
              Converting to PNG is essential when you need to layer an image
              over other content or require pixel-perfect reproduction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Common Reasons to Convert
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Preparing images for graphic design work (Photoshop, Figma)</li>
              <li>Uploading to platforms that require PNG format</li>
              <li>Preventing further quality loss from re-saving as JPG</li>
              <li>Creating images that need transparent backgrounds later</li>
              <li>Using images in presentations where quality matters</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Will Converting JPG to PNG Improve Quality?
            </h2>
            <p className="text-gray-600">
              Converting JPG to PNG does not restore quality that was already
              lost during JPG compression. The conversion preserves the image
              exactly as-is in a lossless format, preventing any further
              degradation. Think of it as moving the image to a safer container
              — the existing quality is preserved perfectly, but lost detail
              from the original JPG compression cannot be recovered.
            </p>
          </section>
        </div>

        <div className="mt-12">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Related Conversions
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <Link href="/png-to-jpg" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                PNG to JPG
              </Link>
              <Link href="/jpg-to-webp" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                JPG to WebP
              </Link>
              <Link href="/jpg-to-gif" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                JPG to GIF
              </Link>
              <Link href="/jpg-to-ico" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                JPG to ICO
              </Link>
            </div>
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
