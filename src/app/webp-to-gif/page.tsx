import ImageConverter from "@/components/ImageConverter";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "WebP to GIF Converter — Free Online Tool",
  description:
    "Convert WebP images to GIF format for universal compatibility. Free, private, browser-based. No upload required.",
  alternates: { canonical: "https://imageconverters.net/webp-to-gif" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "WebP to GIF Converter",
  url: "https://imageconverters.net/webp-to-gif",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Convert WebP images to GIF format. Runs entirely in your browser — no files are uploaded.",
};

const faqData = [
  {
    question: "Why convert WebP to GIF?",
    answer: "WebP isn't supported by all platforms and applications, especially older ones. Converting to GIF gives you a universally compatible format. GIF is also needed when you want to use an image in contexts that specifically require GIF format."
  },
  {
    question: "Will an animated WebP convert to animated GIF?",
    answer: "This converter processes the first frame of animated WebP files, producing a static GIF. For animated WebP to animated GIF conversion, a specialized tool that handles frame-by-frame conversion is needed."
  },
  {
    question: "Does WebP to GIF conversion lose quality?",
    answer: "GIF is limited to 256 colors while WebP supports millions, so complex images with many colors will show some color reduction. Simple graphics and images with few colors convert cleanly with minimal visible difference."
  },
  {
    question: "What's better for web images — WebP or GIF?",
    answer: "WebP is superior for most web uses — it supports millions of colors, alpha transparency, animation, and much better compression. GIF is mainly useful for legacy compatibility and when a platform specifically requires GIF format."
  }
];

export default function WebpToGifPage() {
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
              { "@type": "ListItem", "position": 2, "name": "WebP to GIF Converter", "item": "https://imageconverters.net/webp-to-gif" }
            ]
          })
        }}
      />
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            WebP to GIF Converter — Convert WebP to GIF Online
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Need to convert a WebP image to GIF? Drop your file below for an
            instant conversion — free, private, and entirely in your browser
            with no upload required.
          </p>
        </div>

        <ImageConverter />

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              WebP vs GIF — Format Comparison
            </h2>
            <p className="text-gray-600">
              WebP is Google&apos;s modern image format that offers superior
              compression and quality compared to GIF. WebP supports millions
              of colors, alpha transparency, and animation with much smaller
              file sizes. GIF, while older and more limited (256 colors, binary
              transparency), has the advantage of near-universal support across
              every platform, browser, and messaging app in existence.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              When to Convert WebP to GIF
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Sharing images on platforms that don&apos;t support WebP</li>
              <li>Using images in older email clients or applications</li>
              <li>Creating simple web graphics for legacy compatibility</li>
              <li>When a platform specifically requires GIF format</li>
              <li>Converting simple graphics and icons with few colors</li>
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
              <Link href="/webp-to-jpg" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                WebP to JPG
              </Link>
              <Link href="/webp-to-png" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                WebP to PNG
              </Link>
              <Link href="/jpg-to-gif" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                JPG to GIF
              </Link>
              <Link href="/gif-to-png" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                GIF to PNG
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
