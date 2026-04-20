import ImageConverter from "@/components/ImageConverter";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PDF to PNG Converter — Convert PDF Pages to Lossless Images Free",
  description:
    "Convert PDF files to PNG images for lossless quality. Extract the first page as a crisp PNG. Free, private, no upload required.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "PDF to PNG Converter",
  url: "https://imageconverters.net/pdf-to-png",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Convert PDF documents to lossless PNG images. Runs entirely in your browser — no files are uploaded.",
};

export default function PdfToPngPage() {
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
              { "@type": "ListItem", "position": 2, "name": "PDF to PNG Converter", "item": "https://imageconverters.net/pdf-to-png" }
            ]
          })
        }}
      />
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            PDF to PNG Converter — Lossless PDF Page Extraction
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Convert your PDF to a crisp, lossless PNG image. Perfect for
            preserving text clarity and sharp edges. Drop your PDF file below
            to extract the first page as PNG — instantly, for free, with no
            upload required.
          </p>
        </div>

        <ImageConverter />

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Why Choose PNG Over JPG for PDFs?
            </h2>
            <p className="text-gray-600">
              When converting PDF pages that contain text, diagrams, or
              sharp-edged graphics, PNG is the better choice over JPG. PNG uses
              lossless compression, meaning every pixel is preserved exactly as
              rendered. JPG&apos;s lossy compression can cause visible artifacts
              around text and sharp lines. If your PDF contains mainly text or
              technical diagrams, PNG will give you a noticeably clearer result.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Best Uses for PDF to PNG
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Extracting diagrams or charts for use in other documents</li>
              <li>Creating high-quality screenshots of PDF pages</li>
              <li>Preserving text clarity for presentations</li>
              <li>Archiving document pages as images without quality loss</li>
              <li>Creating transparent-background versions if the PDF has transparency</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Output Quality
            </h2>
            <p className="text-gray-600">
              The converter renders your PDF at 2x scale, producing a
              high-resolution PNG that looks sharp on both standard and retina
              displays. For a typical letter-size (8.5 x 11 inch) PDF page, the
              output will be approximately 1700 x 2200 pixels. This provides
              excellent quality for viewing, sharing, and embedding in other
              documents.
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
