import ImageConverter from "@/components/ImageConverter";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "WEBP to PNG Converter — Lossless WEBP Conversion",
  description:
    "Convert WEBP images to lossless PNG format. Preserves full quality and transparency. Free, private, no upload required.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "WEBP to PNG Converter",
  url: "https://imageconverters.net/webp-to-png",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Convert WEBP images to lossless PNG format. Runs entirely in your browser — no files are uploaded.",
};

export default function WebpToPngPage() {
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
              { "@type": "ListItem", "position": 2, "name": "WEBP to PNG Converter", "item": "https://imageconverters.net/webp-to-png" }
            ]
          })
        }}
      />
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            WEBP to PNG Converter — Lossless WEBP Conversion
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Need lossless quality from your WEBP images? Convert to PNG to
            preserve every pixel with no compression artifacts. Perfect for
            graphics, screenshots, and images that need transparency.
          </p>
        </div>

        <ImageConverter />

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Why Convert WEBP to PNG?
            </h2>
            <p className="text-gray-600 mb-3">
              While WEBP supports both lossy and lossless compression, there are
              several reasons to convert to PNG:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                <strong>Universal compatibility</strong> — PNG works in every
                image editor, viewer, and platform
              </li>
              <li>
                <strong>Transparency preserved</strong> — PNG maintains alpha
                channel transparency just like WEBP
              </li>
              <li>
                <strong>No quality loss</strong> — PNG uses lossless compression,
                so the converted file is pixel-for-pixel identical
              </li>
              <li>
                <strong>Print-ready</strong> — print services accept PNG files
                for high-quality output
              </li>
              <li>
                <strong>Editing workflows</strong> — PNG is the standard
                intermediate format for graphic design
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              WEBP vs PNG — Key Differences
            </h2>
            <p className="text-gray-600 mb-3">
              Both formats support transparency and lossless compression, but
              they differ in important ways:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-600 border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4 font-medium text-gray-900">Feature</th>
                    <th className="text-left py-2 pr-4 font-medium text-gray-900">WEBP</th>
                    <th className="text-left py-2 font-medium text-gray-900">PNG</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">File size (lossless)</td>
                    <td className="py-2 pr-4">~26% smaller</td>
                    <td className="py-2">Larger</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Transparency</td>
                    <td className="py-2 pr-4">Yes</td>
                    <td className="py-2">Yes</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Animation</td>
                    <td className="py-2 pr-4">Yes</td>
                    <td className="py-2">No (use APNG)</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Software support</td>
                    <td className="py-2 pr-4">Growing</td>
                    <td className="py-2">Universal</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Best for</td>
                    <td className="py-2 pr-4">Web delivery</td>
                    <td className="py-2">Editing, sharing, printing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              When to Choose PNG vs JPG for WEBP Conversion
            </h2>
            <p className="text-gray-600">
              If your WEBP image is a photograph without transparency, converting
              to JPG will give you a much smaller file. Choose PNG when your
              image has transparency, contains text or sharp graphics, or when
              you need lossless quality for further editing. For photos you just
              want to share or upload, JPG is usually the better choice.
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
