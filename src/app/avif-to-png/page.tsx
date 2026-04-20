import ImageConverter from "@/components/ImageConverter";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AVIF to PNG Converter — Convert AVIF Images to PNG Free",
  description:
    "Convert AVIF images to PNG format for universal compatibility. Free, private, browser-based converter. No upload required.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "AVIF to PNG Converter",
  url: "https://imageconverters.net/avif-to-png",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Convert AVIF images to universally compatible PNG format. Runs entirely in your browser — no files are uploaded.",
};

export default function AvifToPngPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            AVIF to PNG Converter — Open AVIF Files Anywhere
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Downloaded an AVIF image that your software can&apos;t open? Convert
            it to universally compatible PNG format. Drop your AVIF files below
            to convert them instantly — for free, with no upload required.
          </p>
        </div>

        <ImageConverter />

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              What Is AVIF?
            </h2>
            <p className="text-gray-600">
              AVIF (AV1 Image File Format) is a next-generation image format
              based on the AV1 video codec. It offers significantly better
              compression than both JPG and WebP — often 50% smaller files at
              comparable quality. Major tech companies including Google,
              Netflix, and Apple support AVIF, and it&apos;s increasingly used
              on the web. However, many desktop applications and older systems
              still can&apos;t open AVIF files.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Why Convert AVIF to PNG?
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Your image editor doesn&apos;t support AVIF (Photoshop, GIMP older versions)</li>
              <li>You need to upload an image to a platform that rejects AVIF</li>
              <li>You want lossless quality for further editing</li>
              <li>You need to share images with people using older software</li>
              <li>You&apos;re archiving images in a widely-supported format</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              AVIF Compatibility
            </h2>
            <p className="text-gray-600">
              AVIF support is growing but not yet universal. Chrome, Firefox,
              and Safari all support AVIF in recent versions. However, many
              image editing applications, social media upload systems, and
              document processors don&apos;t yet accept AVIF files. Converting
              to PNG ensures your image can be used anywhere while preserving
              full quality including transparency.
            </p>
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
