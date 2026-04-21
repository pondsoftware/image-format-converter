import ImageConverter from "@/components/ImageConverter";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SVG to PNG Converter — Convert Vector Graphics to PNG Free",
  description:
    "Convert SVG vector graphics to PNG raster images instantly in your browser. No upload, no sign-up, no limits. 100% private and free.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "SVG to PNG Converter",
  url: "https://imageconverters.net/svg-to-png",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Convert SVG vector graphics to PNG raster images. Runs entirely in your browser — no files are uploaded.",
};

export default function SvgToPngPage() {
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
              { "@type": "ListItem", "position": 2, "name": "SVG to PNG Converter", "item": "https://imageconverters.net/svg-to-png" }
            ]
          })
        }}
      />
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            SVG to PNG Converter — Convert Vector Graphics to PNG
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            SVG files are great for scalable graphics, but many platforms and
            applications require raster images like PNG. Drop your SVG files
            below to convert them to PNG — instantly, for free, with no upload
            required.
          </p>
        </div>

        <ImageConverter />

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Why Convert SVG to PNG?
            </h2>
            <p className="text-gray-600">
              SVG (Scalable Vector Graphics) is a vector format that stays sharp
              at any size, but not every application supports it. Social media
              platforms, email clients, and many image editors require raster
              formats like PNG. Converting SVG to PNG gives you a universally
              compatible image file while preserving transparency and visual
              quality at the rendered resolution.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              When to Use PNG Over SVG
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Uploading logos or icons to social media profiles</li>
              <li>Embedding images in email newsletters</li>
              <li>Using graphics in applications that only accept raster images</li>
              <li>Sharing designs with people who lack SVG-compatible software</li>
              <li>Creating favicon alternatives or app icons</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              SVG vs PNG — Key Differences
            </h2>
            <p className="text-gray-600">
              SVG files use mathematical paths to define shapes, meaning they
              scale to any size without pixelation. PNG files store pixel data
              at a fixed resolution — once converted, the image has a set width
              and height. SVGs are typically smaller in file size for simple
              graphics, while PNGs can be larger but are universally supported.
              PNG also supports full alpha transparency, making it ideal for
              logos and icons on varied backgrounds.
            </p>
          </section>
        </div>

        <div className="mt-12">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Related Conversions
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <Link href="/svg-to-jpg" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                SVG to JPG
              </Link>
              <Link href="/svg-to-webp" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                SVG to WebP
              </Link>
              <Link href="/png-to-webp" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                PNG to WebP
              </Link>
              <Link href="/png-to-ico" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                PNG to ICO
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
