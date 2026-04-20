import ImageConverter from "@/components/ImageConverter";
import Link from "next/link";

const faqData = [
  {
    question: "How do I convert HEIC to JPG?",
    answer: "Drop or select your HEIC file above, choose JPG as the output format, adjust quality if needed, and click download. The conversion happens entirely in your browser — no upload required."
  },
  {
    question: "Why are my iPhone photos in HEIC format?",
    answer: "Apple uses HEIC (High Efficiency Image Container) by default since iOS 11 because it produces smaller file sizes than JPG while maintaining quality. You can change this in Settings > Camera > Formats."
  },
  {
    question: "Is WEBP better than JPG?",
    answer: "WEBP typically produces 25-35% smaller files than JPG at equivalent quality. It supports transparency (like PNG) and animation (like GIF). However, some older software doesn't support WEBP."
  },
  {
    question: "Will converting HEIC to JPG lose quality?",
    answer: "There is minimal quality loss when converting to JPG. Use the quality slider set to 90% or higher for nearly indistinguishable results. Converting to PNG preserves full quality but produces larger files."
  },
  {
    question: "What is AVIF format?",
    answer: "AVIF is a modern image format based on the AV1 video codec. It offers better compression than both JPG and WEBP, but browser and software support is still catching up."
  },
  {
    question: "Can I convert PDF to an image?",
    answer: "Yes! Drop a PDF file into the converter and it will render the first page as an image in your chosen output format. The rendering happens entirely in your browser at 2x resolution for sharp results."
  }
];

const converterPages = [
  { href: "/heic-to-jpg", label: "HEIC to JPG" },
  { href: "/heic-to-png", label: "HEIC to PNG" },
  { href: "/webp-to-jpg", label: "WEBP to JPG" },
  { href: "/webp-to-png", label: "WEBP to PNG" },
  { href: "/avif-to-jpg", label: "AVIF to JPG" },
  { href: "/avif-to-png", label: "AVIF to PNG" },
  { href: "/svg-to-png", label: "SVG to PNG" },
  { href: "/svg-to-jpg", label: "SVG to JPG" },
  { href: "/png-to-jpg", label: "PNG to JPG" },
  { href: "/jpg-to-png", label: "JPG to PNG" },
  { href: "/png-to-webp", label: "PNG to WebP" },
  { href: "/jpg-to-webp", label: "JPG to WebP" },
  { href: "/gif-to-png", label: "GIF to PNG" },
  { href: "/png-to-ico", label: "PNG to ICO" },
  { href: "/jpg-to-ico", label: "JPG to ICO" },
  { href: "/pdf-to-jpg", label: "PDF to JPG" },
  { href: "/pdf-to-png", label: "PDF to PNG" },
];

export default function Home() {
  return (
    <>
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
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Free Image Format Converter — HEIC, WEBP, AVIF, SVG, PDF & More
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Convert between 11+ image formats entirely in your browser. Supports
          HEIC, WEBP, AVIF, SVG, PDF, GIF, BMP, TIFF, JPG, PNG, and ICO. No
          upload, no sign-up, no limits — 100% private.
        </p>
      </div>

      <ImageConverter />

      <div className="mt-12 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Why Can&apos;t I Open My iPhone Photos?
          </h2>
          <p className="text-gray-600">
            Since iOS 11, iPhones save photos in HEIC format (High Efficiency
            Image Container) by default. While HEIC files are roughly half the
            size of JPG, they aren&apos;t universally supported — Windows, some
            email clients, and many websites can&apos;t open them. This
            converter transforms your HEIC photos into widely-compatible JPG or
            PNG files.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            What About WEBP and AVIF Files?
          </h2>
          <p className="text-gray-600">
            WEBP (developed by Google) and AVIF (based on the AV1 video codec)
            are modern image formats used by websites for faster loading. When
            you save or download images from the web, they&apos;re increasingly
            in these formats. If you need to use them in an application that
            doesn&apos;t support WEBP or AVIF, convert them here.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Supported Formats
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <p className="font-medium text-gray-900 mb-2">Input formats</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>HEIC / HEIF (iPhone photos)</li>
                <li>WEBP (Google web format)</li>
                <li>AVIF (AV1 image format)</li>
                <li>SVG (Vector graphics)</li>
                <li>PDF (Document first page)</li>
                <li>GIF (Graphics Interchange)</li>
                <li>BMP (Bitmap)</li>
                <li>TIFF (Tagged Image File)</li>
                <li>JPG / PNG (for format conversion)</li>
                <li>ICO (Icon files)</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <p className="font-medium text-gray-900 mb-2">Output formats</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>JPG — best for photos, smaller file size</li>
                <li>PNG — best for graphics, lossless quality</li>
                <li>WEBP — modern web format, excellent compression</li>
                <li>AVIF — next-gen format, best compression</li>
                <li>BMP — uncompressed bitmap</li>
                <li>GIF — simple animations and graphics</li>
                <li>ICO — favicons for websites</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Quick Converters
          </h2>
          <p className="text-gray-600 mb-4">
            Jump directly to a specific conversion:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {converterPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 rounded-lg px-3 py-2 text-center transition"
              >
                {page.label}
              </Link>
            ))}
          </div>
        </section>
      </div>

      <section className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.question}</h3>
              <p className="text-gray-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://imageconverters.net" }
            ]
          })
        }}
      />
    </>
  );
}
