import ImageConverter from "@/components/ImageConverter";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ICO to PNG Converter — Extract Icons as PNG Free",
  description:
    "Convert ICO icon files to PNG format for editing and web use. Free, private, browser-based. No upload required.",
  alternates: { canonical: "https://imageconverters.net/ico-to-png" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "ICO to PNG Converter",
  url: "https://imageconverters.net/ico-to-png",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Convert ICO icon files to PNG format for editing and web use. Runs entirely in your browser — no files are uploaded.",
};

const faqData = [
  {
    question: "Why convert ICO to PNG?",
    answer: "ICO files are designed for Windows icons and favicons but can't be easily edited in most image editors or used on websites as regular images. Converting to PNG gives you a standard image format that works everywhere — in editors, on web pages, in documents, and more."
  },
  {
    question: "What resolution will the PNG be?",
    answer: "ICO files often contain multiple sizes (16x16, 32x32, 48x48, 256x256). The converter extracts and renders the icon at its available resolution. The resulting PNG preserves the dimensions of the ICO image content."
  },
  {
    question: "Will transparency be preserved?",
    answer: "Yes. Both ICO and PNG support transparency. Any transparent areas in your ICO file will remain transparent in the converted PNG, preserving the icon's appearance when placed on different backgrounds."
  },
  {
    question: "Can I convert a favicon.ico to PNG?",
    answer: "Absolutely. Favicons are standard ICO files and convert perfectly to PNG. This is useful when you need to use a website's icon in a document, presentation, or as a regular image rather than as a browser icon."
  }
];

export default function IcoToPngPage() {
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
              { "@type": "ListItem", "position": 2, "name": "ICO to PNG Converter", "item": "https://imageconverters.net/ico-to-png" }
            ]
          })
        }}
      />
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            ICO to PNG Converter — Extract Icons as PNG
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Need to convert an ICO icon file to a standard PNG image? Drop your
            ICO file below to extract it as a PNG with transparency preserved
            — free, instant, with no upload required.
          </p>
        </div>

        <ImageConverter />

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              What Is ICO Format?
            </h2>
            <p className="text-gray-600">
              ICO (Icon) is a file format used for icons in Microsoft Windows
              and as favicons on websites. ICO files can contain multiple image
              sizes within a single file (e.g., 16x16, 32x32, and 256x256
              pixels). While ICO works great for its intended purpose, it&apos;s
              not a standard image format — most image editors, web platforms,
              and applications don&apos;t support ICO as a regular image.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              When to Convert ICO to PNG
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Editing an icon in standard image editing software</li>
              <li>Using an icon as a regular image in a document or website</li>
              <li>Creating a larger version of a favicon for display</li>
              <li>Including icons in presentations or mockups</li>
              <li>Preparing icons for platforms that require PNG format</li>
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
              <Link href="/png-to-ico" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                PNG to ICO
              </Link>
              <Link href="/jpg-to-ico" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                JPG to ICO
              </Link>
              <Link href="/svg-to-png" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                SVG to PNG
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
