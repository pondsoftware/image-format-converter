import ImageConverter from "@/components/ImageConverter";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HEIC to PNG Converter — Lossless HEIC Conversion",
  description:
    "Convert HEIC iPhone photos to lossless PNG format. Preserves full quality and supports transparency. Free, private, no upload.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "HEIC to PNG Converter",
  url: "https://imageconverters.net/heic-to-png",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Convert iPhone HEIC photos to lossless PNG format. Runs entirely in your browser — no files are uploaded.",
};

export default function HeicToPngPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            HEIC to PNG Converter — Lossless HEIC Conversion
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Need the highest quality conversion from your iPhone photos? PNG is
            a lossless format — no compression artifacts, no quality loss.
            Convert HEIC to PNG when you need pixel-perfect results or
            transparency support.
          </p>
        </div>

        <ImageConverter />

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              When to Choose PNG Over JPG
            </h2>
            <p className="text-gray-600 mb-3">
              Both JPG and PNG are universally compatible, but they serve
              different purposes:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                <strong>PNG is lossless</strong> — every pixel is preserved
                exactly. JPG uses lossy compression that introduces subtle
                artifacts.
              </li>
              <li>
                <strong>PNG supports transparency</strong> — if you need to
                overlay an image on different backgrounds, PNG preserves the
                alpha channel.
              </li>
              <li>
                <strong>PNG is better for graphics</strong> — screenshots, text,
                logos, and images with sharp edges look better in PNG.
              </li>
              <li>
                <strong>JPG is better for photos</strong> — when file size
                matters more than pixel-perfect quality, JPG produces much
                smaller files.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              HEIC vs PNG File Size
            </h2>
            <p className="text-gray-600">
              HEIC is a highly efficient format — converting to PNG will
              typically produce files 3-5x larger than the original HEIC. This
              is because PNG uses lossless compression while HEIC uses lossy
              compression similar to HEVC video. The tradeoff is worth it when
              you need guaranteed quality or transparency support, but if
              file size is a concern and you don&apos;t need lossless quality,
              consider converting to JPG instead.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Use Cases for HEIC to PNG
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Professional photo editing where quality cannot be compromised</li>
              <li>Creating graphics or compositions that need transparency</li>
              <li>Archiving photos in a lossless, universally supported format</li>
              <li>Screenshots captured on iPhone that contain text and UI elements</li>
              <li>Images destined for print production workflows</li>
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
