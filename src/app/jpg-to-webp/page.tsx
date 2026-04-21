import ImageConverter from "@/components/ImageConverter";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "JPG to WebP Converter — Smaller Files, Same Quality Free",
  description:
    "Convert JPG images to WebP for 25-35% smaller file sizes. Free, private, browser-based converter. No upload required.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "JPG to WebP Converter",
  url: "https://imageconverters.net/jpg-to-webp",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Convert JPG images to WebP format for smaller file sizes. Runs entirely in your browser — no files are uploaded.",
};

export default function JpgToWebpPage() {
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
              { "@type": "ListItem", "position": 2, "name": "JPG to WebP Converter", "item": "https://imageconverters.net/jpg-to-webp" }
            ]
          })
        }}
      />
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            JPG to WebP Converter — Smaller Files, Same Quality
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            WebP compresses photos 25-35% better than JPG at equivalent visual
            quality. Convert your JPG images to WebP to make your website faster
            and save storage space — instantly, for free, with no upload
            required.
          </p>
        </div>

        <ImageConverter />

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              JPG vs WebP Compression
            </h2>
            <p className="text-gray-600">
              Both JPG and WebP use lossy compression for photographs, but WebP
              uses more advanced algorithms that produce smaller files at the
              same perceived quality. In Google&apos;s own studies, WebP lossy
              images were 25-34% smaller than comparable JPG images at
              equivalent SSIM quality index. This means faster page loads and
              lower hosting costs for websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Best Uses for WebP
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Website images — faster loading and better Core Web Vitals</li>
              <li>E-commerce product photos — reduced bandwidth costs</li>
              <li>Blog and content images — improved page speed scores</li>
              <li>Progressive web apps — smaller download sizes</li>
              <li>CDN-served images — lower data transfer costs</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Choosing the Right Quality
            </h2>
            <p className="text-gray-600">
              For photos being served on the web, 75-85% quality in WebP
              typically produces visually identical results to the original JPG
              while being significantly smaller. For high-quality archives or
              print preparation, use 90-95%. The quality slider lets you
              preview the resulting file size so you can make an informed
              decision for your specific use case.
            </p>
          </section>
        </div>

        <div className="mt-12">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Related Conversions
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <Link href="/png-to-webp" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                PNG to WebP
              </Link>
              <Link href="/webp-to-jpg" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                WebP to JPG
              </Link>
              <Link href="/jpg-to-png" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                JPG to PNG
              </Link>
              <Link href="/jpg-to-gif" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                JPG to GIF
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
