import ImageConverter from "@/components/ImageConverter";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SVG to WebP Converter — Rasterize Vectors for Web Free",
  description:
    "Convert SVG vector graphics to WebP format for optimized web delivery. Free, private, browser-based. No upload required.",
  alternates: { canonical: "https://imageconverters.net/svg-to-webp" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "SVG to WebP Converter",
  url: "https://imageconverters.net/svg-to-webp",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Convert SVG vector graphics to WebP format for optimized web delivery. Runs entirely in your browser — no files are uploaded.",
};

const faqData = [
  {
    question: "Why convert SVG to WebP?",
    answer: "While SVG is excellent for simple vector graphics, it can be slow to render for complex illustrations. WebP provides a rasterized version that loads instantly, supports transparency, and offers excellent compression — ideal for web pages where performance matters."
  },
  {
    question: "What resolution will the WebP image be?",
    answer: "The converter renders the SVG at its natural dimensions as defined in the SVG file. Since SVG is vector-based and resolution-independent, the resulting WebP captures a high-quality rasterization of the graphic."
  },
  {
    question: "Is transparency preserved when converting SVG to WebP?",
    answer: "Yes. WebP supports full alpha transparency, so any transparent areas in your SVG will remain transparent in the WebP output. This makes WebP ideal for logos, icons, and graphics that need to overlay other content."
  },
  {
    question: "Should I use SVG or WebP on my website?",
    answer: "Use SVG for simple logos, icons, and graphics that need to scale to any size. Use WebP for complex illustrations, photos, and images where consistent rendering performance is important. WebP is also better when you need a fixed-size image."
  }
];

export default function SvgToWebpPage() {
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
              { "@type": "ListItem", "position": 2, "name": "SVG to WebP Converter", "item": "https://imageconverters.net/svg-to-webp" }
            ]
          })
        }}
      />
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            SVG to WebP Converter — Rasterize Vectors for Web
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Convert SVG vector graphics to optimized WebP images for faster web
            delivery. WebP offers excellent compression with transparency
            support — free, instant, with no upload required.
          </p>
        </div>

        <ImageConverter />

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              SVG vs WebP — When to Use Each
            </h2>
            <p className="text-gray-600">
              SVG (Scalable Vector Graphics) is XML-based and resolution
              independent — it scales perfectly to any size. However, complex
              SVGs can be large and slow to render. WebP is a raster format
              with excellent compression that loads consistently fast regardless
              of complexity. Converting SVG to WebP is ideal when you need a
              fixed-size image for web use with the best possible file size.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              When to Convert SVG to WebP
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Optimizing complex illustrations for web page performance</li>
              <li>Creating fixed-size thumbnails from vector graphics</li>
              <li>Platforms that don&apos;t support SVG (email clients, some CMS)</li>
              <li>Reducing server bandwidth for high-traffic images</li>
              <li>Social media posts that require raster image formats</li>
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
              <Link href="/svg-to-png" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                SVG to PNG
              </Link>
              <Link href="/svg-to-jpg" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                SVG to JPG
              </Link>
              <Link href="/png-to-webp" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                PNG to WebP
              </Link>
              <Link href="/jpg-to-webp" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                JPG to WebP
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
