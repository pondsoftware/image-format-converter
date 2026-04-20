import ImageConverter from "@/components/ImageConverter";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "JPG to ICO Converter — Create Favicons from Photos Free",
  description:
    "Convert JPG images to ICO format for website favicons. Free, private, browser-based. No upload required. Creates 32x32 ICO files.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "JPG to ICO Converter",
  url: "https://imageconverters.net/jpg-to-ico",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Convert JPG images to ICO favicon format. Runs entirely in your browser — no files are uploaded.",
};

export default function JpgToIcoPage() {
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
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://imageconverters.net" },
              { "@type": "ListItem", "position": 2, "name": "JPG to ICO Converter", "item": "https://imageconverters.net/jpg-to-ico" }
            ]
          })
        }}
      />
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            JPG to ICO Converter — Create Favicons from Photos
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Want to use a photo or JPG image as your website&apos;s favicon?
            Drop your JPG file below to convert it to ICO format — the standard
            favicon format for all browsers. Instantly, for free, with no upload
            required.
          </p>
        </div>

        <ImageConverter />

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Creating Favicons from JPG Images
            </h2>
            <p className="text-gray-600">
              While most favicons start from PNG files (which support
              transparency), you can also create favicons from JPG images. This
              is useful for personal blogs, photography portfolios, or any site
              where a photo-based icon makes sense. The converter resizes your
              JPG to 32x32 pixels and wraps it in the ICO container format.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Tips for JPG Favicons
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Crop your JPG to a square before converting for best results</li>
              <li>Choose a photo with a clear subject and good contrast</li>
              <li>Simple, bold images work better at 32x32 pixel sizes</li>
              <li>Avoid photos with fine details that will be lost when shrunk</li>
              <li>Consider using a logo or icon instead for a more professional look</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              JPG vs PNG for Favicons
            </h2>
            <p className="text-gray-600">
              PNG is generally preferred for favicons because it supports
              transparency — your icon can blend seamlessly with any browser
              tab color. JPG-based favicons always have a solid background
              (usually white). If you need transparency, convert your image to
              PNG first, remove the background using an image editor, then
              convert the PNG to ICO.
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
