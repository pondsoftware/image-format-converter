import ImageConverter from "@/components/ImageConverter";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HEIC to JPG Converter — Free, Private, No Upload Required",
  description:
    "Convert iPhone HEIC photos to JPG format instantly in your browser. No upload, no sign-up, no limits. 100% private and free.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "HEIC to JPG Converter",
  url: "https://imageconverters.net/heic-to-jpg",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Convert iPhone HEIC photos to universally compatible JPG format. Runs entirely in your browser — no files are uploaded.",
};

export default function HeicToJpgPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            HEIC to JPG Converter — Convert iPhone Photos to JPG
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            iPhones save photos in HEIC format by default, but most Windows PCs,
            websites, and older software can&apos;t open them. Drop your HEIC files
            below to convert them to universally compatible JPG — instantly, for
            free, with no upload required.
          </p>
        </div>

        <ImageConverter />

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Why Are iPhone Photos HEIC?
            </h2>
            <p className="text-gray-600">
              Apple adopted the HEIC (High Efficiency Image Container) format
              starting with iOS 11 in 2017. HEIC uses the HEVC video codec to
              compress still images, producing files roughly 50% smaller than
              equivalent JPGs while maintaining the same visual quality. This
              saves significant storage space on your iPhone — especially
              important as camera resolutions keep increasing. However, the
              format isn&apos;t universally supported outside the Apple ecosystem,
              which is why converting to JPG is often necessary.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              How to Stop iPhone from Using HEIC
            </h2>
            <p className="text-gray-600 mb-3">
              If you&apos;d rather your iPhone save photos as JPG from the start,
              you can change the camera format setting:
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-2">
              <li>Open <strong>Settings</strong> on your iPhone</li>
              <li>Scroll down and tap <strong>Camera</strong></li>
              <li>Tap <strong>Formats</strong></li>
              <li>Select <strong>Most Compatible</strong> instead of High Efficiency</li>
            </ol>
            <p className="text-gray-600 mt-3">
              Note that this will increase the storage space your photos use by
              approximately 2x. For photos already taken in HEIC, use the
              converter above.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              When to Convert HEIC to JPG
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Uploading photos to websites that don&apos;t accept HEIC</li>
              <li>Sharing images with Windows users who can&apos;t open HEIC files</li>
              <li>Using photos in older image editing software</li>
              <li>Attaching images to emails for maximum compatibility</li>
              <li>Printing photos at services that require JPG format</li>
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
