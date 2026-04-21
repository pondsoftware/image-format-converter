import ImageConverter from "@/components/ImageConverter";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "WEBP to JPG Converter — Free Online Tool",
  description:
    "Convert WEBP images to JPG format instantly in your browser. No upload needed, completely private and free.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "WEBP to JPG Converter",
  url: "https://imageconverters.net/webp-to-jpg",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Convert WEBP images to JPG format. Runs entirely in your browser — no files are uploaded.",
};

export default function WebpToJpgPage() {
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
              { "@type": "ListItem", "position": 2, "name": "WEBP to JPG Converter", "item": "https://imageconverters.net/webp-to-jpg" }
            ]
          })
        }}
      />
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            WEBP to JPG Converter — Convert WEBP Images Online
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            WEBP is a modern image format used by many websites, but not all
            software supports it yet. Convert your WEBP images to universally
            compatible JPG format — free, instant, and entirely in your browser.
          </p>
        </div>

        <ImageConverter />

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              What Is WEBP Format?
            </h2>
            <p className="text-gray-600">
              WEBP is an image format developed by Google in 2010, designed
              specifically for the web. It uses both lossy and lossless
              compression, producing files that are typically 25-35% smaller than
              equivalent JPGs with no visible quality loss. Most modern web
              browsers support WEBP natively, which is why many websites now
              serve images in this format. When you right-click and save an image
              from a website, you&apos;ll often end up with a .webp file.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              WEBP vs JPG — When to Use Each
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-600 border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4 font-medium text-gray-900">Feature</th>
                    <th className="text-left py-2 pr-4 font-medium text-gray-900">WEBP</th>
                    <th className="text-left py-2 font-medium text-gray-900">JPG</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">File size</td>
                    <td className="py-2 pr-4">Smaller (25-35% less)</td>
                    <td className="py-2">Larger</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Transparency</td>
                    <td className="py-2 pr-4">Supported</td>
                    <td className="py-2">Not supported</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Software support</td>
                    <td className="py-2 pr-4">Modern apps only</td>
                    <td className="py-2">Universal</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Best for</td>
                    <td className="py-2 pr-4">Web display</td>
                    <td className="py-2">Sharing, printing, editing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Why Convert WEBP to JPG?
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Older photo editors like Photoshop CS6 don&apos;t open WEBP files</li>
              <li>Some social media platforms don&apos;t accept WEBP uploads</li>
              <li>Print services typically require JPG or PNG format</li>
              <li>Email clients may not display WEBP inline</li>
              <li>You need maximum compatibility across all devices and software</li>
            </ul>
          </section>
        </div>

        <div className="mt-12">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Related Conversions
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <Link href="/webp-to-png" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                WebP to PNG
              </Link>
              <Link href="/webp-to-gif" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                WebP to GIF
              </Link>
              <Link href="/jpg-to-webp" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                JPG to WebP
              </Link>
              <Link href="/png-to-webp" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                PNG to WebP
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
