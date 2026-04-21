import ImageConverter from "@/components/ImageConverter";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AVIF to WebP Converter — Convert AVIF to WebP Free",
  description:
    "Convert AVIF images to WebP format for broader compatibility. Free, private, browser-based. No upload required.",
  alternates: { canonical: "https://imageconverters.net/avif-to-webp" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "AVIF to WebP Converter",
  url: "https://imageconverters.net/avif-to-webp",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Convert AVIF images to WebP format for broader compatibility. Runs entirely in your browser — no files are uploaded.",
};

const faqData = [
  {
    question: "Why convert AVIF to WebP?",
    answer: "While AVIF offers better compression than WebP, its browser and software support is still catching up. WebP has much broader support (97%+ of browsers) and is accepted by more platforms. Converting AVIF to WebP gives you broad compatibility with excellent compression."
  },
  {
    question: "Which is better — AVIF or WebP?",
    answer: "AVIF typically produces 20% smaller files than WebP at the same quality, but WebP has much wider support. AVIF is newer and not yet accepted everywhere. WebP is the safe middle ground between JPG's universal compatibility and AVIF's superior compression."
  },
  {
    question: "Will converting AVIF to WebP increase file size?",
    answer: "Usually slightly, since AVIF has better compression efficiency. However, WebP still produces much smaller files than JPG or PNG. The small size increase is often worth the significantly broader platform support you get with WebP."
  },
  {
    question: "Do all browsers support WebP?",
    answer: "Yes, all modern browsers support WebP including Chrome, Firefox, Safari (since version 14), and Edge. Over 97% of web users have WebP support. The only exceptions are very old browser versions that are rarely encountered."
  }
];

export default function AvifToWebpPage() {
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
              { "@type": "ListItem", "position": 2, "name": "AVIF to WebP Converter", "item": "https://imageconverters.net/avif-to-webp" }
            ]
          })
        }}
      />
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            AVIF to WebP Converter — Broader Compatibility
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            AVIF has excellent compression but limited support. Convert to WebP
            for broad browser compatibility while keeping files small — free,
            instant, and entirely in your browser with no upload required.
          </p>
        </div>

        <ImageConverter />

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              AVIF vs WebP — Format Comparison
            </h2>
            <p className="text-gray-600">
              AVIF and WebP are both modern image formats designed for the web.
              AVIF (based on the AV1 video codec) offers about 20% better
              compression than WebP, but WebP (developed by Google) has much
              broader platform support. WebP is supported by 97%+ of browsers
              and most modern applications, while AVIF support is still
              expanding. Converting from AVIF to WebP trades a small amount of
              compression efficiency for significantly wider compatibility.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              When to Convert AVIF to WebP
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>When a platform or CMS doesn&apos;t support AVIF uploads</li>
              <li>Ensuring images display for users on older browsers</li>
              <li>Email templates where AVIF isn&apos;t supported</li>
              <li>Content management systems that accept WebP but not AVIF</li>
              <li>When you need a widely-supported modern format</li>
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
              <Link href="/avif-to-jpg" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                AVIF to JPG
              </Link>
              <Link href="/avif-to-png" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                AVIF to PNG
              </Link>
              <Link href="/webp-to-jpg" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                WebP to JPG
              </Link>
              <Link href="/heic-to-webp" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                HEIC to WebP
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
