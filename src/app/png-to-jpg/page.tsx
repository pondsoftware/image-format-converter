import ImageConverter from "@/components/ImageConverter";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PNG to JPG Converter — Reduce Image File Size Free",
  description:
    "Convert PNG images to JPG to dramatically reduce file size. Free, private, browser-based converter. No upload required.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "PNG to JPG Converter",
  url: "https://imageconverters.net/png-to-jpg",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Convert PNG images to JPG format to reduce file size. Runs entirely in your browser — no files are uploaded.",
};

export default function PngToJpgPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            PNG to JPG Converter — Reduce Image File Size
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            PNG files are often much larger than necessary for photos and
            screenshots. Convert your PNG images to JPG to reduce file size by
            60-80% while maintaining excellent visual quality. No upload, no
            sign-up, completely free.
          </p>
        </div>

        <ImageConverter />

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              PNG vs JPG — When to Convert
            </h2>
            <p className="text-gray-600">
              PNG uses lossless compression, preserving every pixel perfectly —
              ideal for graphics, logos, and images with text. However, for
              photographs and complex images, PNG files can be 3-5x larger than
              JPG with no visible quality difference. If your image is a photo,
              screenshot, or any image where exact pixel preservation
              isn&apos;t critical, converting to JPG will save significant space.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              How Much Space Will I Save?
            </h2>
            <p className="text-gray-600">
              Typical file size reductions when converting PNG to JPG at 90%
              quality:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mt-3">
              <li>Screenshots: 60-70% smaller</li>
              <li>Photos: 70-85% smaller</li>
              <li>Graphics with gradients: 50-65% smaller</li>
              <li>Simple graphics with flat colors: 30-50% smaller</li>
            </ul>
            <p className="text-gray-600 mt-3">
              Use the quality slider to fine-tune the balance between file size
              and visual quality. 85-92% quality is the sweet spot for most
              images.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              When to Keep PNG Format
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Images that need transparency (JPG has no alpha channel)</li>
              <li>Logos, icons, and text-heavy graphics</li>
              <li>Images you&apos;ll edit further (JPG degrades with each save)</li>
              <li>Line art and pixel-perfect diagrams</li>
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
