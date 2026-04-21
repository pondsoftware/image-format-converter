import ImageConverter from "@/components/ImageConverter";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TIFF to JPG Converter — Free Online Tool",
  description:
    "Convert TIFF images to JPG format instantly in your browser. Reduce large TIFF file sizes while preserving quality. Free, private, no upload required.",
  alternates: { canonical: "https://imageconverters.net/tiff-to-jpg" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "TIFF to JPG Converter",
  url: "https://imageconverters.net/tiff-to-jpg",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Convert TIFF images to JPG format for smaller file sizes and universal compatibility. Runs entirely in your browser — no files are uploaded.",
};

const faqData = [
  {
    question: "How do I convert TIFF to JPG?",
    answer: "Drop or select your TIFF file above, choose JPG as the output format, adjust quality if needed, and click download. The conversion happens entirely in your browser — no upload required."
  },
  {
    question: "Why are TIFF files so large?",
    answer: "TIFF (Tagged Image File Format) uses lossless compression or no compression at all, preserving every pixel of detail. This makes files much larger than JPG, which uses lossy compression to dramatically reduce file size with minimal visible quality loss."
  },
  {
    question: "Will I lose quality converting TIFF to JPG?",
    answer: "There is some quality reduction when converting to JPG due to lossy compression. Set the quality slider to 90-95% for nearly indistinguishable results from the original. For most uses, the massive file size reduction is worth the minimal quality trade-off."
  },
  {
    question: "When should I keep files in TIFF format?",
    answer: "Keep TIFF files when you need lossless archival quality, professional print production, or multi-layer editing. For web use, email, and general sharing, JPG is the better choice due to its universal compatibility and smaller size."
  }
];

export default function TiffToJpgPage() {
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
              { "@type": "ListItem", "position": 2, "name": "TIFF to JPG Converter", "item": "https://imageconverters.net/tiff-to-jpg" }
            ]
          })
        }}
      />
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            TIFF to JPG Converter — Reduce File Size Instantly
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            TIFF files are great for archival quality but too large for everyday
            use. Convert your TIFF images to compact JPG format — free, instant,
            and entirely in your browser with no upload required.
          </p>
        </div>

        <ImageConverter />

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              What Is TIFF Format?
            </h2>
            <p className="text-gray-600">
              TIFF (Tagged Image File Format) is a flexible image format commonly
              used in professional photography, publishing, and archival work. It
              supports lossless compression, multiple layers, and high color
              depths. However, TIFF files can be extremely large — a single image
              can easily be 50-100 MB or more, making them impractical for web
              use, email, or general sharing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Why Convert TIFF to JPG?
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Reduce file size by 90% or more for easier sharing</li>
              <li>Universal compatibility — every device and app opens JPG</li>
              <li>Required format for most websites and social media</li>
              <li>Email-friendly file sizes for photo attachments</li>
              <li>Faster loading and less storage space needed</li>
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
              <Link href="/tiff-to-png" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                TIFF to PNG
              </Link>
              <Link href="/jpg-to-png" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                JPG to PNG
              </Link>
              <Link href="/bmp-to-jpg" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                BMP to JPG
              </Link>
              <Link href="/heic-to-jpg" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                HEIC to JPG
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
