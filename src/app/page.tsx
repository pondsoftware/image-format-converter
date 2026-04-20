import ImageConverter from "@/components/ImageConverter";

const faqData = [
  {
    question: "How do I convert HEIC to JPG?",
    answer: "Drop or select your HEIC file above, choose JPG as the output format, adjust quality if needed, and click download. The conversion happens entirely in your browser — no upload required."
  },
  {
    question: "Why are my iPhone photos in HEIC format?",
    answer: "Apple uses HEIC (High Efficiency Image Container) by default since iOS 11 because it produces smaller file sizes than JPG while maintaining quality. You can change this in Settings > Camera > Formats."
  },
  {
    question: "Is WEBP better than JPG?",
    answer: "WEBP typically produces 25-35% smaller files than JPG at equivalent quality. It supports transparency (like PNG) and animation (like GIF). However, some older software doesn't support WEBP."
  },
  {
    question: "Will converting HEIC to JPG lose quality?",
    answer: "There is minimal quality loss when converting to JPG. Use the quality slider set to 90% or higher for nearly indistinguishable results. Converting to PNG preserves full quality but produces larger files."
  },
  {
    question: "What is AVIF format?",
    answer: "AVIF is a modern image format based on the AV1 video codec. It offers better compression than both JPG and WEBP, but browser and software support is still catching up."
  }
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })
        }}
      />
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Convert HEIC, WEBP & AVIF to JPG or PNG
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Free online image converter that runs entirely in your browser. Drop
          your files below and download the converted images instantly. No
          upload, no sign-up, no limits.
        </p>
      </div>

      <ImageConverter />

      <div className="mt-12 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Why Can&apos;t I Open My iPhone Photos?
          </h2>
          <p className="text-gray-600">
            Since iOS 11, iPhones save photos in HEIC format (High Efficiency
            Image Container) by default. While HEIC files are roughly half the
            size of JPG, they aren&apos;t universally supported — Windows, some
            email clients, and many websites can&apos;t open them. This
            converter transforms your HEIC photos into widely-compatible JPG or
            PNG files.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            What About WEBP and AVIF Files?
          </h2>
          <p className="text-gray-600">
            WEBP (developed by Google) and AVIF (based on the AV1 video codec)
            are modern image formats used by websites for faster loading. When
            you save or download images from the web, they&apos;re increasingly
            in these formats. If you need to use them in an application that
            doesn&apos;t support WEBP or AVIF, convert them here.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Supported Formats
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <p className="font-medium text-gray-900 mb-2">Input formats</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>HEIC / HEIF (iPhone photos)</li>
                <li>WEBP (Google web format)</li>
                <li>AVIF (AV1 image format)</li>
                <li>BMP (Bitmap)</li>
                <li>TIFF (Tagged Image File)</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <p className="font-medium text-gray-900 mb-2">Output formats</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>JPG — best for photos, smaller file size</li>
                <li>PNG — best for graphics, lossless quality</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <section className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.question}</h3>
              <p className="text-gray-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
    </>
  );
}
