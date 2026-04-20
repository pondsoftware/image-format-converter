import ImageConverter from "@/components/ImageConverter";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PNG to ICO Converter — Create Favicons Free",
  description:
    "Convert PNG images to ICO format for website favicons. Free, private, browser-based. No upload required. Creates 32x32 ICO files.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "PNG to ICO Converter",
  url: "https://imageconverters.net/png-to-ico",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Convert PNG images to ICO favicon format. Runs entirely in your browser — no files are uploaded.",
};

export default function PngToIcoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            PNG to ICO Converter — Create Favicons from PNG
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Need a favicon for your website? Drop your PNG logo or icon below
            to convert it to ICO format — the standard favicon format supported
            by all browsers. Instantly, for free, with no upload required.
          </p>
        </div>

        <ImageConverter />

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              What Is a Favicon?
            </h2>
            <p className="text-gray-600">
              A favicon (short for &quot;favorites icon&quot;) is the small icon
              that appears in browser tabs, bookmarks, and history. The standard
              format is ICO, which can contain multiple sizes of the same icon.
              This converter creates a 32x32 pixel ICO file from your PNG image,
              which is the most common favicon size used by modern browsers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Tips for Great Favicons
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Start with a square PNG image (ideally 512x512 or larger)</li>
              <li>Use simple, recognizable shapes — details get lost at small sizes</li>
              <li>Ensure good contrast between the icon and background</li>
              <li>Test your favicon against both light and dark browser themes</li>
              <li>Use transparency for a clean look in browser tabs</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              How to Add a Favicon to Your Website
            </h2>
            <p className="text-gray-600 mb-3">
              After converting your PNG to ICO, upload the file to your
              website&apos;s root directory and add this line to your HTML head:
            </p>
            <code className="block bg-gray-100 rounded-lg p-3 text-sm text-gray-800">
              &lt;link rel=&quot;icon&quot; href=&quot;/favicon.ico&quot;
              type=&quot;image/x-icon&quot;&gt;
            </code>
            <p className="text-gray-600 mt-3">
              Most browsers also look for favicon.ico in the root directory
              automatically, so simply placing the file at yourdomain.com/favicon.ico
              often works without any HTML changes.
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
