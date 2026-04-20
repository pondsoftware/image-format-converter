import ImageConverter from "@/components/ImageConverter";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PDF to JPG Converter — Extract PDF Pages as Images Free",
  description:
    "Convert PDF files to JPG images instantly in your browser. Extract the first page as a high-quality JPG. Free, private, no upload required.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "PDF to JPG Converter",
  url: "https://imageconverters.net/pdf-to-jpg",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Convert PDF documents to JPG images. Runs entirely in your browser — no files are uploaded.",
};

export default function PdfToJpgPage() {
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
              { "@type": "ListItem", "position": 2, "name": "PDF to JPG Converter", "item": "https://imageconverters.net/pdf-to-jpg" }
            ]
          })
        }}
      />
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            PDF to JPG Converter — Extract PDF Pages as Images
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Need to turn a PDF into a JPG image? Drop your PDF file below to
            extract the first page as a high-quality JPG image — instantly, for
            free, with no upload required. Perfect for thumbnails, previews, and
            sharing.
          </p>
        </div>

        <ImageConverter />

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Why Convert PDF to JPG?
            </h2>
            <p className="text-gray-600">
              PDF is a document format — great for text, layouts, and print, but
              not ideal when you need an image. Converting PDF to JPG is useful
              for creating thumbnails for document libraries, sharing previews
              on social media, embedding document snapshots in presentations,
              or using a PDF page as a background image. JPG is universally
              supported and easy to share.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              How It Works
            </h2>
            <p className="text-gray-600">
              This converter renders the first page of your PDF at 2x
              resolution for sharp, clear output. The PDF is processed entirely
              in your browser using JavaScript — nothing is sent to a server.
              The rendered page is then converted to JPG format with adjustable
              quality. For multi-page PDFs, only the first page is extracted.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Common Use Cases
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Creating document thumbnails for file management systems</li>
              <li>Sharing a PDF preview on social media or messaging apps</li>
              <li>Extracting charts or diagrams from PDF reports</li>
              <li>Creating image versions of certificates or letters</li>
              <li>Building document preview galleries for websites</li>
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
