import ImageConverter from "@/components/ImageConverter";

export default function Home() {
  return (
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
    </div>
  );
}
