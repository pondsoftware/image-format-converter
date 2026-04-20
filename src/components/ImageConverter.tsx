"use client";

import { useState, useCallback, useRef } from "react";

type OutputFormat = "image/jpeg" | "image/png" | "image/webp" | "image/avif" | "image/bmp" | "image/gif" | "image/x-icon";

const EXT_MAP: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/avif": "avif",
  "image/bmp": "bmp",
  "image/gif": "gif",
  "image/x-icon": "ico",
};

interface ConvertedFile {
  id: string;
  originalName: string;
  originalSize: number;
  originalType: string;
  convertedBlob: Blob | null;
  convertedUrl: string | null;
  outputFormat: OutputFormat;
  status: "pending" | "converting" | "done" | "error";
  error?: string;
}

export default function ImageConverter() {
  const [files, setFiles] = useState<ConvertedFile[]>([]);
  const [outputFormat, setOutputFormat] = useState<OutputFormat>("image/jpeg");
  const [quality, setQuality] = useState(0.92);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const addFiles = useCallback(
    async (fileList: FileList) => {
      const newFiles: ConvertedFile[] = Array.from(fileList).map((file) => ({
        id: Math.random().toString(36).slice(2),
        originalName: file.name,
        originalSize: file.size,
        originalType: file.type || getTypeFromExtension(file.name),
        convertedBlob: null,
        convertedUrl: null,
        outputFormat,
        status: "pending" as const,
      }));

      setFiles((prev) => [...prev, ...newFiles]);

      for (let i = 0; i < newFiles.length; i++) {
        const entry = newFiles[i];
        const file = fileList[i];

        setFiles((prev) =>
          prev.map((f) =>
            f.id === entry.id ? { ...f, status: "converting" } : f
          )
        );

        try {
          const blob = await convertImage(file, outputFormat, quality);
          const url = URL.createObjectURL(blob);
          setFiles((prev) =>
            prev.map((f) =>
              f.id === entry.id
                ? {
                    ...f,
                    convertedBlob: blob,
                    convertedUrl: url,
                    status: "done",
                  }
                : f
            )
          );
        } catch (err) {
          setFiles((prev) =>
            prev.map((f) =>
              f.id === entry.id
                ? {
                    ...f,
                    status: "error",
                    error:
                      err instanceof Error
                        ? err.message
                        : "Conversion failed",
                  }
                : f
            )
          );
        }
      }
    },
    [outputFormat, quality]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      if (e.dataTransfer.files.length > 0) {
        addFiles(e.dataTransfer.files);
      }
    },
    [addFiles]
  );

  const downloadFile = (file: ConvertedFile) => {
    if (!file.convertedUrl) return;
    const ext = EXT_MAP[file.outputFormat] || "bin";
    const baseName = file.originalName.replace(/\.[^.]+$/, "");
    const a = document.createElement("a");
    a.href = file.convertedUrl;
    a.download = `${baseName}.${ext}`;
    a.click();
  };

  const downloadAll = async () => {
    const doneFiles = files.filter((f) => f.status === "done" && f.convertedBlob);
    if (doneFiles.length === 0) return;

    const JSZip = (await import("jszip")).default;
    const zip = new JSZip();

    for (const file of doneFiles) {
      const ext = EXT_MAP[file.outputFormat] || "bin";
      const baseName = file.originalName.replace(/\.[^.]+$/, "");
      zip.file(`${baseName}.${ext}`, file.convertedBlob!);
    }

    const blob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "converted-images.zip";
    a.click();
    URL.revokeObjectURL(url);
  };

  const clearAll = () => {
    files.forEach((f) => {
      if (f.convertedUrl) URL.revokeObjectURL(f.convertedUrl);
    });
    setFiles([]);
  };

  const showQuality = outputFormat === "image/jpeg" || outputFormat === "image/webp" || outputFormat === "image/avif";
  const doneCount = files.filter((f) => f.status === "done").length;

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-wrap gap-4 items-end">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Output Format
          </label>
          <select
            value={outputFormat}
            onChange={(e) => setOutputFormat(e.target.value as OutputFormat)}
            className="rounded-lg border border-gray-300 px-4 py-2 bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
          >
            <option value="image/jpeg">JPG</option>
            <option value="image/png">PNG</option>
            <option value="image/webp">WEBP</option>
            <option value="image/avif">AVIF</option>
            <option value="image/bmp">BMP</option>
            <option value="image/gif">GIF</option>
            <option value="image/x-icon">ICO</option>
          </select>
        </div>
        {showQuality && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Quality: {Math.round(quality * 100)}%
            </label>
            <input
              type="range"
              min={0.1}
              max={1}
              step={0.05}
              value={quality}
              onChange={(e) => setQuality(Number(e.target.value))}
              className="w-40"
            />
          </div>
        )}
      </div>

      {/* Drop Zone */}
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition ${
          isDragging
            ? "border-indigo-500 bg-indigo-50"
            : "border-gray-300 hover:border-indigo-400 hover:bg-gray-50"
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept=".heic,.heif,.webp,.avif,.bmp,.tiff,.tif,.svg,.gif,.ico,.pdf,.jpg,.jpeg,.png,image/heic,image/heif,image/webp,image/avif,image/bmp,image/tiff,image/svg+xml,image/gif,image/x-icon,application/pdf,image/jpeg,image/png"
          onChange={(e) => e.target.files && addFiles(e.target.files)}
          className="hidden"
        />
        <svg
          className="w-12 h-12 mx-auto text-gray-400 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <p className="text-lg font-medium text-gray-700">
          Drop images here or click to browse
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Supports HEIC, WEBP, AVIF, BMP, TIFF, SVG, GIF, ICO, PDF, JPG, PNG
        </p>
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">
              {doneCount} of {files.length} converted
            </p>
            <div className="flex gap-3">
              {doneCount > 1 && (
                <button
                  onClick={downloadAll}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition"
                >
                  Download All
                </button>
              )}
              <button
                onClick={clearAll}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition"
              >
                Clear
              </button>
            </div>
          </div>

          <div className="space-y-2">
            {files.map((file) => (
              <div
                key={file.id}
                className="flex items-center justify-between bg-white rounded-lg border border-gray-200 px-4 py-3"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <StatusIcon status={file.status} />
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {file.originalName.replace(/\.[^.]+$/, "")}.{EXT_MAP[file.outputFormat] || "bin"}
                    </p>
                    <p className="text-xs text-gray-500">
                      {formatSize(file.originalSize)}
                      {file.convertedBlob && (
                        <>
                          {" "}
                          &rarr; {formatSize(file.convertedBlob.size)}
                          {file.convertedBlob.size < file.originalSize ? (
                            <span className="text-green-600 ml-1">
                              ({Math.round((1 - file.convertedBlob.size / file.originalSize) * 100)}% smaller)
                            </span>
                          ) : file.convertedBlob.size > file.originalSize ? (
                            <span className="text-orange-600 ml-1">
                              ({Math.round((file.convertedBlob.size / file.originalSize - 1) * 100)}% larger)
                            </span>
                          ) : null}
                        </>
                      )}
                    </p>
                  </div>
                </div>
                {file.status === "done" && (
                  <button
                    onClick={() => downloadFile(file)}
                    className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition shrink-0 ml-3"
                  >
                    Download
                  </button>
                )}
                {file.status === "error" && (
                  <p className="text-sm text-red-600 shrink-0 ml-3">
                    {file.error}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Privacy Notice */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex gap-3">
        <svg
          className="w-5 h-5 text-green-600 shrink-0 mt-0.5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
            clipRule="evenodd"
          />
        </svg>
        <div>
          <p className="text-sm font-medium text-green-800">
            100% Private — Your files never leave your device
          </p>
          <p className="text-xs text-green-700 mt-1">
            All conversion happens directly in your browser using JavaScript.
            Nothing is uploaded to any server. Your images stay on your
            computer the entire time.
          </p>
        </div>
      </div>
    </div>
  );
}

function StatusIcon({ status }: { status: ConvertedFile["status"] }) {
  if (status === "pending")
    return <div className="w-5 h-5 rounded-full bg-gray-200" />;
  if (status === "converting")
    return (
      <div className="w-5 h-5 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin" />
    );
  if (status === "done")
    return (
      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
    );
  return (
    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function getTypeFromExtension(name: string): string {
  const ext = name.split(".").pop()?.toLowerCase();
  const map: Record<string, string> = {
    heic: "image/heic",
    heif: "image/heif",
    webp: "image/webp",
    avif: "image/avif",
    bmp: "image/bmp",
    tiff: "image/tiff",
    tif: "image/tiff",
    svg: "image/svg+xml",
    gif: "image/gif",
    ico: "image/x-icon",
    pdf: "application/pdf",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    png: "image/png",
  };
  return map[ext || ""] || "application/octet-stream";
}

async function decodeHeicToCanvas(file: File): Promise<HTMLCanvasElement> {
  // Use wasm-bundle variant — self-contained for browser, no fs dependency
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const libheif = (await import("libheif-js/wasm-bundle" as any)).default;
  const buffer = await file.arrayBuffer();
  const decoder = new libheif.HeifDecoder();
  const data = decoder.decode(new Uint8Array(buffer));

  if (!data || data.length === 0) {
    throw new Error("Could not decode HEIC file — the file may be corrupted");
  }

  const image = data[0];
  const width = image.get_width();
  const height = image.get_height();

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Could not create canvas context");

  const imageData = ctx.createImageData(width, height);

  await new Promise<void>((resolve, reject) => {
    image.display(imageData, (displayData: ImageData | null) => {
      if (!displayData) {
        return reject(new Error("HEIC decoding failed — unsupported HEIC variant"));
      }
      resolve();
    });
  });

  ctx.putImageData(imageData, 0, 0);
  return canvas;
}

async function convertImage(
  file: File,
  outputFormat: OutputFormat,
  quality: number
): Promise<Blob> {
  const type = file.type || getTypeFromExtension(file.name);

  // HEIC: decode with libheif-js (WASM-based decoder)
  if (type === "image/heic" || type === "image/heif") {
    const canvas = await decodeHeicToCanvas(file);

    if (outputFormat === "image/x-icon") {
      return canvasToIco(canvas);
    }

    return new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob) => (blob ? resolve(blob) : reject(new Error("Conversion failed"))),
        outputFormat,
        quality
      );
    });
  }

  // PDF needs pdf.js to render
  if (type === "application/pdf") {
    const pdfjsLib = await import("pdfjs-dist");
    pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;
    const pdf = await pdfjsLib.getDocument(URL.createObjectURL(file)).promise;
    const page = await pdf.getPage(1);
    const viewport = page.getViewport({ scale: 2 });
    const canvas = document.createElement("canvas");
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    const ctx = canvas.getContext("2d")!;
    await page.render({ canvas, canvasContext: ctx, viewport }).promise;

    // Handle ICO output
    if (outputFormat === "image/x-icon") {
      return canvasToIco(canvas);
    }

    return new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob) => (blob ? resolve(blob) : reject(new Error("Conversion failed"))),
        outputFormat,
        quality
      );
    });
  }

  // SVG handling — load via object URL, draw to canvas
  if (type === "image/svg+xml") {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        let w = img.naturalWidth;
        let h = img.naturalHeight;
        // If SVG has no intrinsic size, default to 1024x1024
        if (!w || !h) {
          w = 1024;
          h = 1024;
        }
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("Could not create canvas context"));
          return;
        }
        ctx.drawImage(img, 0, 0, w, h);

        if (outputFormat === "image/x-icon") {
          canvasToIco(canvas).then(resolve).catch(reject);
          return;
        }

        canvas.toBlob(
          (blob) => (blob ? resolve(blob) : reject(new Error("Conversion failed — format may not be supported by your browser"))),
          outputFormat,
          quality
        );
      };
      img.onerror = () => reject(new Error("Could not load SVG image"));
      img.src = URL.createObjectURL(file);
    });
  }

  // For all other formats — use Canvas API
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        reject(new Error("Could not create canvas context"));
        return;
      }
      ctx.drawImage(img, 0, 0);

      if (outputFormat === "image/x-icon") {
        canvasToIco(canvas).then(resolve).catch(reject);
        return;
      }

      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error("Conversion failed — format may not be supported by your browser"));
          }
        },
        outputFormat,
        quality
      );
    };
    img.onerror = () =>
      reject(
        new Error(
          "Could not load image — format may not be supported by your browser"
        )
      );
    img.src = URL.createObjectURL(file);
  });
}

async function canvasToIco(sourceCanvas: HTMLCanvasElement): Promise<Blob> {
  // Resize to 32x32 for ICO
  const icoCanvas = document.createElement("canvas");
  icoCanvas.width = 32;
  icoCanvas.height = 32;
  const icoCtx = icoCanvas.getContext("2d")!;
  icoCtx.drawImage(sourceCanvas, 0, 0, 32, 32);

  // Get PNG data
  const pngBlob = await new Promise<Blob>((res, rej) => {
    icoCanvas.toBlob((b) => (b ? res(b) : rej(new Error("Failed to create PNG for ICO"))), "image/png");
  });
  const pngData = new Uint8Array(await pngBlob.arrayBuffer());

  // Build ICO file with PNG payload
  const ico = new Uint8Array(22 + pngData.length);
  const view = new DataView(ico.buffer);
  view.setUint16(0, 0, true); // reserved
  view.setUint16(2, 1, true); // type: icon
  view.setUint16(4, 1, true); // count: 1
  ico[6] = 32; // width
  ico[7] = 32; // height
  ico[8] = 0; // color palette
  ico[9] = 0; // reserved
  view.setUint16(10, 1, true); // color planes
  view.setUint16(12, 32, true); // bits per pixel
  view.setUint32(14, pngData.length, true); // size of image data
  view.setUint32(18, 22, true); // offset to image data
  ico.set(pngData, 22);

  return new Blob([ico], { type: "image/x-icon" });
}
