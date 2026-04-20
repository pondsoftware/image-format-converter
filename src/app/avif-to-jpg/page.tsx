import ImageConverter from "@/components/ImageConverter";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AVIF to JPG Converter — Convert AVIF Images Online",
  description:
    "Convert AVIF images to JPG format instantly in your browser. Free, private, no upload required. Works with all AVIF files.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "AVIF to JPG Converter",
  url: "https://imageconverters.net/avif-to-jpg",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Convert AVIF images to universally compatible JPG format. Runs entirely in your browser — no files are uploaded.",
};

export default function AvifToJpgPage() {
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
              { "@type": "ListItem", "position": 2, "name": "AVIF to JPG Converter", "item": "https://imageconverters.net/avif-to-jpg" }
            ]
          })
        }}
      />
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            AVIF to JPG Converter — Convert AVIF Images Online
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            AVIF is a next-generation image format that offers excellent
            compression, but software support is still limited. Convert your
            AVIF files to widely-compatible JPG — instantly, free, and without
            uploading anything.
          </p>
        </div>

        <ImageConverter />

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              What Is AVIF Format?
            </h2>
            <p className="text-gray-600">
              AVIF (AV1 Image File Format) is based on the AV1 video codec
              developed by the Alliance for Open Media. Released in 2019, it
              offers significantly better compression than both JPG and WEBP —
              files can be 50% smaller than JPG at equivalent visual quality.
              AVIF supports HDR, wide color gamut, transparency, and animation.
              Major tech companies including Google, Netflix, and Apple back the
              format.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Why Convert AVIF to JPG?
            </h2>
            <p className="text-gray-600 mb-3">
              Despite its technical advantages, AVIF has limited support in many
              common tools:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Most desktop image viewers don&apos;t open AVIF files yet</li>
              <li>Photo editing software like older Photoshop versions lack AVIF support</li>
              <li>Many CMS platforms and website builders reject AVIF uploads</li>
              <li>Email clients cannot display AVIF images inline</li>
              <li>Print services require JPG or TIFF format</li>
              <li>Some social media platforms don&apos;t accept AVIF</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              AVIF Browser Support
            </h2>
            <p className="text-gray-600">
              Chrome (version 85+), Firefox (version 93+), and Safari (version
              16.1+) all support AVIF natively. This means this converter can
              process your AVIF files directly in the browser without any
              plugins. If you&apos;re using an older browser that doesn&apos;t
              support AVIF, you may need to update your browser first.
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
