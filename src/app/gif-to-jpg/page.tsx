import ImageConverter from "@/components/ImageConverter";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GIF to JPG Converter — Free Online Tool",
  description:
    "Convert GIF images to JPG format for smaller files and better photo quality. Free, private, browser-based. No upload required.",
  alternates: { canonical: "https://imageconverters.net/gif-to-jpg" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "GIF to JPG Converter",
  url: "https://imageconverters.net/gif-to-jpg",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Convert GIF images to JPG format. Runs entirely in your browser — no files are uploaded.",
};

const faqData = [
  {
    question: "What happens to animated GIFs when converting to JPG?",
    answer: "JPG does not support animation, so only the first frame of an animated GIF is captured. The resulting JPG will be a static image of the GIF's opening frame."
  },
  {
    question: "Will JPG look better than GIF for photos?",
    answer: "JPG supports millions of colors while GIF is limited to 256, so photographs often display better in JPG. However, if the GIF was originally created from a photo, the 256-color limitation has already reduced quality, and converting to JPG won't restore lost colors."
  },
  {
    question: "Does GIF to JPG conversion reduce file size?",
    answer: "For photographic content, JPG files are often smaller than GIF equivalents because JPG's lossy compression is very efficient for photos. For simple graphics with few colors, GIF may actually be smaller than JPG."
  },
  {
    question: "Will transparency be preserved when converting GIF to JPG?",
    answer: "No. JPG does not support transparency. Transparent areas in your GIF will be filled with a solid background color (typically white) in the resulting JPG. If you need transparency, convert to PNG instead."
  }
];

export default function GifToJpgPage() {
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
              { "@type": "ListItem", "position": 2, "name": "GIF to JPG Converter", "item": "https://imageconverters.net/gif-to-jpg" }
            ]
          })
        }}
      />
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            GIF to JPG Converter — Convert GIF to JPEG Online
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Need to convert a GIF to JPG? Whether you want a static image from
            an animated GIF or need JPG format for compatibility, drop your
            file below — free, instant, with no upload required.
          </p>
        </div>

        <ImageConverter />

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Why Convert GIF to JPG?
            </h2>
            <p className="text-gray-600">
              While GIF is widely supported, there are good reasons to convert
              to JPG. JPG supports millions of colors (vs GIF&apos;s 256),
              produces smaller files for photographic content, and is the
              expected format for many platforms and applications. If you have a
              GIF that was originally a photo, converting to JPG often improves
              display quality on devices that render JPG natively.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Common Use Cases
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Extracting a still frame from an animated GIF</li>
              <li>Uploading to platforms that require JPG format</li>
              <li>Reducing file size for photographic GIF content</li>
              <li>Creating a static thumbnail from an animated image</li>
              <li>Preparing images for print (which doesn&apos;t support GIF well)</li>
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
              <Link href="/gif-to-png" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                GIF to PNG
              </Link>
              <Link href="/jpg-to-gif" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                JPG to GIF
              </Link>
              <Link href="/jpg-to-png" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                JPG to PNG
              </Link>
              <Link href="/webp-to-jpg" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                WebP to JPG
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
