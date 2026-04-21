import ImageConverter from "@/components/ImageConverter";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BMP to JPG Converter — Compress Bitmap Images Free",
  description:
    "Convert BMP bitmap images to compressed JPG format. Reduce file sizes dramatically while preserving visual quality. Free, private, no upload required.",
  alternates: { canonical: "https://imageconverters.net/bmp-to-jpg" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "BMP to JPG Converter",
  url: "https://imageconverters.net/bmp-to-jpg",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Convert BMP bitmap images to compressed JPG format. Runs entirely in your browser — no files are uploaded.",
};

const faqData = [
  {
    question: "How much smaller will my JPG be compared to BMP?",
    answer: "JPG files are typically 90-95% smaller than the equivalent BMP. A 10 MB BMP photo might become a 500 KB to 1 MB JPG at high quality settings, making it practical for email, web, and sharing."
  },
  {
    question: "What is BMP format used for?",
    answer: "BMP (Bitmap) is an uncompressed image format native to Windows. It stores every pixel without compression, resulting in very large files. It was common in older Windows applications and is still used in some legacy systems and embedded devices."
  },
  {
    question: "Does BMP to JPG conversion lose quality?",
    answer: "JPG uses lossy compression, so there is a slight quality reduction. However, at 90-95% quality settings, the difference is virtually invisible to the human eye. The massive file size reduction makes this trade-off worthwhile for most purposes."
  },
  {
    question: "Should I convert BMP to JPG or PNG?",
    answer: "Choose JPG for photographs and natural images — you'll get much smaller files. Choose PNG for graphics, logos, screenshots, or images with text where you need pixel-perfect quality and sharp edges."
  }
];

export default function BmpToJpgPage() {
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
              { "@type": "ListItem", "position": 2, "name": "BMP to JPG Converter", "item": "https://imageconverters.net/bmp-to-jpg" }
            ]
          })
        }}
      />
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            BMP to JPG Converter — Compress Bitmap Images
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            BMP files are uncompressed and enormous. Convert them to compact JPG
            format to reduce file size by 90% or more — free, instant, and
            entirely in your browser with no upload required.
          </p>
        </div>

        <ImageConverter />

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Why Are BMP Files So Large?
            </h2>
            <p className="text-gray-600">
              BMP (Bitmap) is one of the oldest image formats, dating back to
              early Windows systems. It stores image data with no compression at
              all — every single pixel is recorded individually. A 1920x1080
              image in BMP format takes up about 6 MB, while the same image in
              JPG might be 200-500 KB. This makes BMP impractical for sharing,
              web use, or email.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              When to Convert BMP to JPG
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Sharing images via email or messaging apps</li>
              <li>Uploading to websites or social media platforms</li>
              <li>Freeing up disk space from legacy BMP collections</li>
              <li>Making screenshots from older Windows apps shareable</li>
              <li>Batch converting old archives to modern formats</li>
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
              <Link href="/bmp-to-png" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                BMP to PNG
              </Link>
              <Link href="/tiff-to-jpg" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                TIFF to JPG
              </Link>
              <Link href="/jpg-to-png" className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition">
                JPG to PNG
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
