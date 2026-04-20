import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://imageconverters.net"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  title: "HEIC to JPG Converter — Free Online Image Format Converter",
  description:
    "Convert HEIC, WEBP, and AVIF images to JPG or PNG instantly. Free, fast, and private — your files never leave your browser.",
  openGraph: {
    title: "HEIC to JPG Converter",
    description:
      "Convert HEIC, WEBP, and AVIF images to JPG or PNG instantly. Free, fast, and private — your files never leave your browser.",
    type: "website",
    url: "https://imageconverters.net",
    siteName: "Image Format Converter",
  },
  twitter: {
    card: "summary",
    title: "HEIC to JPG Converter",
    description:
      "Convert HEIC, WEBP, and AVIF images to JPG or PNG instantly. Free, fast, and private — your files never leave your browser.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-K7FMZ8XELQ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-K7FMZ8XELQ');
        `}
      </Script>
      <body className="min-h-full flex flex-col font-sans bg-gray-50 text-gray-900">
        <header className="bg-indigo-600 text-white shadow-sm">
          <div className="max-w-4xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <a href="/" className="flex items-center gap-2">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
              </svg>
              <span className="text-xl font-bold">Image Format Converter</span>
            </a>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="bg-white border-t border-gray-200 mt-12">
          <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-800 text-center mb-3">More Photo Tools</p>
              <div className="flex justify-center gap-4">
                <a href="https://photometadata.net" className="flex-1 max-w-xs bg-indigo-50 border border-indigo-200 rounded-lg px-4 py-3 text-center hover:border-indigo-400 hover:bg-indigo-100 transition">
                  <p className="font-semibold text-indigo-700 text-sm">Photo Metadata Viewer</p>
                  <p className="text-xs text-indigo-600 mt-0.5">View &amp; strip EXIF data</p>
                </a>
                <a href="https://imageresizers.net" className="flex-1 max-w-xs bg-indigo-50 border border-indigo-200 rounded-lg px-4 py-3 text-center hover:border-indigo-400 hover:bg-indigo-100 transition">
                  <p className="font-semibold text-indigo-700 text-sm">Social Image Resizer</p>
                  <p className="text-xs text-indigo-600 mt-0.5">Resize for Instagram, TikTok &amp; more</p>
                </a>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700 text-center mb-2">More Free Tools</p>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm">
                <a href="https://appliancecostcalculator.net" className="text-indigo-600 hover:underline">Appliance Cost Calculator</a>
                <a href="https://sidehustletaxcalculator.net" className="text-indigo-600 hover:underline">Side Hustle Tax Calculator</a>
                <a href="https://freelancerates.net" className="text-indigo-600 hover:underline">Freelance Rate Calculator</a>
                <a href="https://lendingcalculator.net" className="text-indigo-600 hover:underline">Mortgage Calculator</a>
                <a href="https://compoundinterestcalc.app" className="text-indigo-600 hover:underline">Compound Interest Calculator</a>
                <a href="https://salaryconverter.net" className="text-indigo-600 hover:underline">Salary Converter</a>
                <a href="https://printablepolly.com" className="text-indigo-600 hover:underline">Printable Polly</a>
                <a href="https://biblegarden.net" className="text-indigo-600 hover:underline">Bible Garden</a>
              </div>
            </div>
            <p className="text-sm text-gray-500 text-center">
              All image processing happens entirely in your browser. Your files
              are never uploaded to any server. This tool supports HEIC (iPhone
              photos), WEBP (web images), AVIF, BMP, and TIFF formats.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
