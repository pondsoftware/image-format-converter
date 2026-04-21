import ImageConverter from "@/components/ImageConverter";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "JPG to GIF Converter — Free Online Tool",
  description:
    "Convert JPG images to GIF format for simple graphics and web use. Free, private, browser-based. No upload required.",
  alternates: { canonical: "https://imageconverters.net/jpg-to-gif" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "JPG to GIF Converter",
  url: "https://imageconverters.net/jpg-to-gif",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Convert JPG images to GIF format. Runs entirely in your browser — no files are uploaded.",
};

const faqData = [
  {
    question: "Why convert JPG to GIF?",
    answer: "GIF is useful when you need a format with universal support, transparency, or when preparing images for platforms that specifically require GIF format. GIF also supports animation, though converting a static JPG will produce a static GIF."
  },
  {
    question: "Will my image look different after converting to GIF?",
    answer: "GIF is limited to 256 colors, while JPG supports millions. Photos with many colors or subtle gradients may show visible banding or dithering after conversion. GIF works best for graphics, logos, and images with solid colors rather than photographs."
  },
  {
    question: "Can I make an animated GIF from a JPG?",
    answer: "This converter creates static GIF images from JPG files. To create animated GIFs, you would need multiple source images or frames combined with a dedicated animation tool."
  },
  {
    question: "Is GIF or PNG better for web graphics?",
    answer: "PNG is generally better — it supports millions of colors, better transparency (alpha channel vs binary), and typically smaller file sizes. GIF's main advantage is animation support. For static images, PNG is the better choice."
  }
];

export default function JpgToGifPage() {
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
              { "@type": "ListItem", "position": 2, "name": "JPG to GIF Converter", "item": "https://imageconverters.net/jpg-to-gif" }
            ]
          })
        }}
      />
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            JPG to GIF Converter — Convert JPEG to GIF Online
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Need a GIF version of your JPG image? Convert instantly in your
            browser — free, private, and with no upload required. Best for
            simple graphics and images with limited colors.
          </p>
        </div>

        <ImageConverter />

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Understanding GIF Format
            </h2>
            <p className="text-gray-600">
              GIF (Graphics Interchange Format) dates back to 1987 and remains
              one of the most universally supported image formats. It uses
              lossless compression but is limited to a maximum of 256 colors per
              frame. This makes it ideal for simple graphics, icons, and logos
              but less suitable for complex photographs. GIF also uniquely
              supports animation, making it the format behind countless web
              animations and memes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Things to Know Before Converting
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>GIF supports only 256 colors — photos may lose color detail</li>
              <li>Simple graphics and logos convert best to GIF</li>
              <li>GIF supports transparency (on/off, not partial)</li>
              <li>File sizes may actually increase for complex photographs</li>
              <li>Consider PNG as a better alternative for static images</li>
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
              <Link href="/jpg-to-png" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                JPG to PNG
              </Link>
              <Link href="/png-to-gif" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                PNG to GIF
              </Link>
              <Link href="/gif-to-jpg" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                GIF to JPG
              </Link>
              <Link href="/webp-to-gif" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                WebP to GIF
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
