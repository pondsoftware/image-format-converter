import ImageConverter from "@/components/ImageConverter";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BMP to PNG Converter — Lossless Bitmap Conversion Free",
  description:
    "Convert BMP bitmap images to PNG format with lossless compression and transparency support. Free, private, browser-based. No upload required.",
  alternates: { canonical: "https://imageconverters.net/bmp-to-png" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "BMP to PNG Converter",
  url: "https://imageconverters.net/bmp-to-png",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Convert BMP bitmap images to PNG format with lossless compression. Runs entirely in your browser — no files are uploaded.",
};

const faqData = [
  {
    question: "Does converting BMP to PNG lose any quality?",
    answer: "No. PNG uses lossless compression, meaning every pixel is preserved exactly as it was in the original BMP. You get the same quality in a much smaller file that supports transparency."
  },
  {
    question: "How much smaller is PNG compared to BMP?",
    answer: "PNG files are typically 50-80% smaller than BMP, depending on the image content. Images with large areas of solid color compress especially well. Unlike JPG, this size reduction comes with zero quality loss."
  },
  {
    question: "Why choose PNG over JPG for BMP conversion?",
    answer: "Choose PNG when you need lossless quality (no compression artifacts), transparency support, or when working with graphics, logos, and screenshots. JPG is better when you want the absolute smallest file size and are working with photographs."
  },
  {
    question: "Can PNG files have transparent backgrounds?",
    answer: "Yes. PNG supports an alpha channel for full transparency, which BMP does not. After converting to PNG, you can edit the image in any graphics editor to add transparency where needed."
  }
];

export default function BmpToPngPage() {
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
            "@type": "FAQPage",
            "mainEntity": faqData.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://imageconverters.net" },
              { "@type": "ListItem", "position": 2, "name": "BMP to PNG Converter", "item": "https://imageconverters.net/bmp-to-png" }
            ]
          })
        }}
      />
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            BMP to PNG Converter — Lossless Bitmap Conversion
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Convert uncompressed BMP images to PNG for smaller files with zero
            quality loss. PNG adds transparency support and better compression
            — free, instant, with no upload required.
          </p>
        </div>

        <ImageConverter />

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              BMP vs PNG — Why Convert?
            </h2>
            <p className="text-gray-600">
              BMP stores images without any compression, resulting in
              unnecessarily large files. PNG uses lossless compression to
              achieve 50-80% smaller file sizes without losing a single pixel of
              quality. PNG also adds transparency support and is universally
              compatible with web browsers, unlike BMP which some browsers
              struggle to display properly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Benefits of Converting BMP to PNG
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Significantly smaller file sizes with zero quality loss</li>
              <li>Transparency (alpha channel) support for layering</li>
              <li>Universal web browser compatibility</li>
              <li>Better metadata support and modern features</li>
              <li>Widely accepted by all image editing software</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div key={index}>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Related Conversions
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <Link href="/bmp-to-jpg" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                BMP to JPG
              </Link>
              <Link href="/tiff-to-png" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                TIFF to PNG
              </Link>
              <Link href="/png-to-webp" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                PNG to WebP
              </Link>
              <Link href="/png-to-jpg" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                PNG to JPG
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
