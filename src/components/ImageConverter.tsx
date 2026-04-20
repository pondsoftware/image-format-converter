"use client";

import { useState, useCallback, useRef } from "react";

type OutputFormat = "image/jpeg" | "image/png";

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
    const ext = file.outputFormat === "image/jpeg" ? "jpg" : "png";
    const baseName = file.originalName.replace(/\.[^.]+$/, "");
    const a = document.createElement("a");
    a.href = file.convertedUrl;
    a.download = `${baseName}.${ext}`;
    a.click();
  };

  const downloadAll = () => {
    files
      .filter((f) => f.status === "done")
      .forEach((f) => downloadFile(f));
  };

  const clearAll = () => {
    files.forEach((f) => {
      if (f.convertedUrl) URL.revokeObjectURL(f.convertedUrl);
    });
    setFiles([]);
  };

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
            className="rounded-lg border border-gray-300 px-4 py-2 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
          >
            <option value="image/jpeg">JPG</option>
            <option value="image/png">PNG</option>
          </select>
        </div>
        {outputFormat === "image/jpeg" && (
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
            ? "border-blue-500 bg-blue-50"
            : "border-gray-300 hover:border-blue-400 hover:bg-gray-50"
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept=".heic,.heif,.webp,.avif,.bmp,.tiff,.tif,image/heic,image/heif,image/webp,image/avif,image/bmp,image/tiff"
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
          Supports HEIC, WEBP, AVIF, BMP, TIFF
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
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
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
                      {file.originalName}
                    </p>
                    <p className="text-xs text-gray-500">
                      {formatSize(file.originalSize)}
                      {file.convertedBlob && (
                        <>
                          {" "}
                          &rarr; {formatSize(file.convertedBlob.size)}
                          <span className="text-green-600 ml-1">
                            (
                            {Math.round(
                              (1 -
                                file.convertedBlob.size / file.originalSize) *
                                100
                            )}
                            % smaller)
                          </span>
                        </>
                      )}
                    </p>
                  </div>
                </div>
                {file.status === "done" && (
                  <button
                    onClick={() => downloadFile(file)}
                    className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition shrink-0 ml-3"
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
      <div className="w-5 h-5 rounded-full border-2 border-blue-500 border-t-transparent animate-spin" />
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
  };
  return map[ext || ""] || "application/octet-stream";
}

async function convertImage(
  file: File,
  outputFormat: OutputFormat,
  quality: number
): Promise<Blob> {
  const type = file.type || getTypeFromExtension(file.name);

  // HEIC needs special handling via heic2any
  if (type === "image/heic" || type === "image/heif") {
    const heic2any = (await import("heic2any")).default;
    const result = await heic2any({
      blob: file,
      toType: outputFormat,
      quality,
    });
    return Array.isArray(result) ? result[0] : result;
  }

  // For WEBP, AVIF, BMP, TIFF — use Canvas API
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
