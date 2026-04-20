import ImageConverter from "@/components/ImageConverter";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SVG to JPG Converter — Convert Vector Graphics to JPG Free",
  description:
    "Convert SVG vector graphics to JPG images instantly in your browser. No upload, no sign-up, no limits. 100% private and free.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "SVG to JPG Converter",
  url: "https://imageconverters.net/svg-to-jpg",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Convert SVG vector graphics to JPG images. Runs entirely in your browser — no files are uploaded.",
};

export default function SvgToJpgPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            SVG to JPG Converter — Convert Vector Graphics to JPG
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Need to turn your SVG vector file into a JPG image? Drop your SVG
            files below to convert them to JPG format — instantly, for free,
            with no upload required. Perfect for sharing on platforms that
            don&apos;t support vector graphics.
          </p>
        </div>

        <ImageConverter />

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Why Convert SVG to JPG?
            </h2>
            <p className="text-gray-600">
              While SVG is the preferred format for web graphics and logos, JPG
              is the most widely supported image format across all devices and
              platforms. Converting SVG to JPG is useful when you need to upload
              images to systems that only accept JPG, or when you want a
              smaller file size for photographs and complex graphics that were
              originally saved as SVG.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Things to Know About SVG to JPG Conversion
            </h2>
            <p className="text-gray-600">
              JPG does not support transparency. If your SVG has a transparent
              background, the converted JPG will have a white background. For
              graphics that need transparency, consider converting to PNG
              instead. JPG uses lossy compression, so you can adjust the quality
              slider to balance file size and visual quality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Common Use Cases
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Converting logos for use in Word documents or presentations</li>
              <li>Preparing vector artwork for print services requiring JPG</li>
              <li>Creating thumbnails from SVG illustrations</li>
              <li>Sharing graphics via messaging apps that compress SVGs poorly</li>
              <li>Uploading images to websites with strict JPG-only policies</li>
            </ul>
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
