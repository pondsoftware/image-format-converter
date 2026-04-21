import ImageConverter from "@/components/ImageConverter";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HEIC to WebP Converter — iPhone Photos to WebP Free",
  description:
    "Convert iPhone HEIC photos to WebP format for optimized web use. Smaller files with excellent quality. Free, private, no upload required.",
  alternates: { canonical: "https://imageconverters.net/heic-to-webp" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "HEIC to WebP Converter",
  url: "https://imageconverters.net/heic-to-webp",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Convert iPhone HEIC photos to WebP format for optimized web use. Runs entirely in your browser — no files are uploaded.",
};

const faqData = [
  {
    question: "Why convert HEIC to WebP instead of JPG?",
    answer: "WebP produces 25-35% smaller files than JPG at the same visual quality. If your images are destined for web use, WebP is the better target format — faster loading, less bandwidth, and support for transparency. Choose JPG only if you need maximum compatibility with older software."
  },
  {
    question: "Does WebP support the same quality as HEIC?",
    answer: "Both HEIC and WebP are modern formats with excellent compression. WebP supports both lossy and lossless modes. At 90%+ quality settings, the conversion from HEIC to WebP produces visually indistinguishable results with excellent file sizes."
  },
  {
    question: "Can I use WebP images everywhere?",
    answer: "WebP is supported by all modern browsers (Chrome, Firefox, Safari, Edge) covering over 97% of web users. However, some older desktop applications and email clients may not support it. For maximum compatibility, JPG or PNG remain safer choices."
  },
  {
    question: "How do I convert iPhone photos to WebP?",
    answer: "Simply drop your HEIC files into the converter above, select WebP as the output format, adjust quality if desired, and download. The conversion happens entirely in your browser — your photos are never uploaded to any server."
  }
];

export default function HeicToWebpPage() {
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
              { "@type": "ListItem", "position": 2, "name": "HEIC to WebP Converter", "item": "https://imageconverters.net/heic-to-webp" }
            ]
          })
        }}
      />
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            HEIC to WebP Converter — iPhone Photos to WebP
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Convert iPhone HEIC photos directly to WebP for optimal web
            performance. WebP gives you smaller files than JPG with the same
            quality — free, instant, with no upload required.
          </p>
        </div>

        <ImageConverter />

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              HEIC to WebP — The Modern Conversion
            </h2>
            <p className="text-gray-600">
              Both HEIC and WebP are modern formats designed for excellent
              compression. HEIC is Apple&apos;s choice for iPhone camera photos,
              while WebP is Google&apos;s web-optimized format. Converting from
              HEIC to WebP lets you publish iPhone photos on the web with
              optimal file sizes — typically 25-35% smaller than JPG while
              maintaining the same visual quality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Why Choose WebP Over JPG?
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>25-35% smaller files at equivalent visual quality</li>
              <li>Supports transparency (alpha channel) unlike JPG</li>
              <li>Supported by all modern browsers (97%+ of users)</li>
              <li>Better for website performance and Core Web Vitals</li>
              <li>Supports both lossy and lossless compression modes</li>
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
              <Link href="/heic-to-jpg" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                HEIC to JPG
              </Link>
              <Link href="/heic-to-png" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                HEIC to PNG
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
