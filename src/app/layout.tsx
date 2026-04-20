import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HEIC to JPG Converter — Free Online Image Format Converter",
  description:
    "Convert HEIC, WEBP, and AVIF images to JPG or PNG instantly. Free, fast, and private — your files never leave your browser.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-gray-50 text-gray-900">
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <p className="text-xl font-bold text-gray-900">
              Image Format Converter
            </p>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="bg-white border-t border-gray-200 mt-12">
          <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
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
