import ImageConverter from "@/components/ImageConverter";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TIFF to PNG Converter — Lossless Conversion Free",
  description:
    "Convert TIFF images to PNG format with lossless quality and transparency support. Free, private, browser-based. No upload required.",
  alternates: { canonical: "https://imageconverters.net/tiff-to-png" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "TIFF to PNG Converter",
  url: "https://imageconverters.net/tiff-to-png",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Convert TIFF images to PNG format with lossless quality. Runs entirely in your browser — no files are uploaded.",
};

const faqData = [
  {
    question: "Does converting TIFF to PNG lose quality?",
    answer: "No. Both TIFF and PNG support lossless compression, so converting between them preserves every pixel of detail. PNG is a lossless format that maintains the exact quality of your original TIFF image."
  },
  {
    question: "Why convert TIFF to PNG instead of JPG?",
    answer: "Choose PNG when you need lossless quality, transparency support, or when working with graphics, logos, or screenshots. Choose JPG when file size is more important and you're working with photographs."
  },
  {
    question: "Will the PNG file be smaller than the TIFF?",
    answer: "Usually yes. PNG uses more efficient lossless compression than most TIFF files. However, PNG files will still be larger than JPG equivalents since PNG preserves full quality without any lossy compression."
  },
  {
    question: "Can I convert multi-page TIFF to PNG?",
    answer: "This converter processes the first page/frame of a TIFF file. For multi-page TIFFs, each page would need to be converted separately. The conversion renders the primary image content to PNG format."
  }
];

export default function TiffToPngPage() {
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
              { "@type": "ListItem", "position": 2, "name": "TIFF to PNG Converter", "item": "https://imageconverters.net/tiff-to-png" }
            ]
          })
        }}
      />
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            TIFF to PNG Converter — Lossless Quality Conversion
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Need to convert TIFF to a more web-friendly format without losing
            quality? PNG preserves every pixel while offering better
            compatibility. Convert instantly — free, with no upload required.
          </p>
        </div>

        <ImageConverter />

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              TIFF vs PNG — Key Differences
            </h2>
            <p className="text-gray-600">
              Both TIFF and PNG are lossless formats, but they serve different
              purposes. TIFF is the standard in professional printing and
              photography workflows, supporting CMYK color space and multiple
              layers. PNG is the web standard for lossless images, with universal
              browser support and efficient compression. Converting TIFF to PNG
              gives you the same quality in a format that works everywhere online.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              When to Convert TIFF to PNG
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Publishing images on websites that don&apos;t accept TIFF</li>
              <li>Sharing lossless images with people who lack TIFF viewers</li>
              <li>Using images in web applications or HTML emails</li>
              <li>Preserving transparency in a universally supported format</li>
              <li>Reducing file size while maintaining lossless quality</li>
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
              <Link href="/tiff-to-jpg" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                TIFF to JPG
              </Link>
              <Link href="/png-to-jpg" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                PNG to JPG
              </Link>
              <Link href="/png-to-webp" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                PNG to WebP
              </Link>
              <Link href="/bmp-to-png" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                BMP to PNG
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
