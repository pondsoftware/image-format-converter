import ImageConverter from "@/components/ImageConverter";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PNG to GIF Converter — Free Online Tool",
  description:
    "Convert PNG images to GIF format for universal compatibility and simple graphics. Free, private, browser-based. No upload required.",
  alternates: { canonical: "https://imageconverters.net/png-to-gif" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "PNG to GIF Converter",
  url: "https://imageconverters.net/png-to-gif",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Convert PNG images to GIF format. Runs entirely in your browser — no files are uploaded.",
};

const faqData = [
  {
    question: "Does converting PNG to GIF lose quality?",
    answer: "If your PNG uses more than 256 colors, yes — GIF is limited to 256 colors maximum. For simple graphics, logos, and icons that already use few colors, the conversion is essentially lossless. For photographs or complex gradients, you may notice color banding."
  },
  {
    question: "Will my PNG transparency be preserved in GIF?",
    answer: "Partially. GIF supports binary transparency (pixels are either fully transparent or fully opaque), while PNG supports alpha transparency (partial transparency). Semi-transparent areas in your PNG will become either fully transparent or fully opaque in GIF."
  },
  {
    question: "When should I use GIF instead of PNG?",
    answer: "GIF is mainly useful when you need animation support or when working with very old systems that handle GIF better. For static images, PNG is almost always the better choice due to its support for millions of colors and alpha transparency."
  },
  {
    question: "Will the GIF file be smaller than my PNG?",
    answer: "It depends on the image. Simple graphics with few colors may be slightly smaller as GIF. Complex images with many colors will often be larger as GIF because of color quantization overhead. PNG generally compresses more efficiently for most images."
  }
];

export default function PngToGifPage() {
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
              { "@type": "ListItem", "position": 2, "name": "PNG to GIF Converter", "item": "https://imageconverters.net/png-to-gif" }
            ]
          })
        }}
      />
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            PNG to GIF Converter — Convert PNG to GIF Online
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Need to convert a PNG image to GIF format? Drop your file below for
            an instant conversion — free, private, and entirely in your browser
            with no upload required.
          </p>
        </div>

        <ImageConverter />

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              PNG vs GIF — Key Differences
            </h2>
            <p className="text-gray-600">
              PNG and GIF are both lossless formats that support transparency,
              but they differ in important ways. PNG supports millions of colors
              and smooth alpha transparency, making it ideal for modern web
              graphics. GIF is limited to 256 colors with binary transparency
              but uniquely supports animation. For static images, PNG is
              generally superior, but GIF remains useful for animated content
              and legacy compatibility.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              When to Use GIF Format
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Creating simple animated graphics</li>
              <li>Platforms or systems that specifically require GIF</li>
              <li>Simple icons and logos with very few colors</li>
              <li>Legacy email clients with limited format support</li>
              <li>Retro-style graphics that use limited color palettes</li>
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
              <Link href="/jpg-to-gif" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                JPG to GIF
              </Link>
              <Link href="/gif-to-png" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                GIF to PNG
              </Link>
              <Link href="/webp-to-gif" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                WebP to GIF
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
