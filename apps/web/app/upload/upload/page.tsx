"use client"
import { useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@workspace/ui/components/button"
export default function UploadPage() {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [price, setPrice] = useState("0.99")
  const [caption, setCaption] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)
  const [published, setPublished] = useState(false)
  const [error, setError] = useState("")
  const [uploadedCid, setUploadedCid] = useState("")
  const [uploadedUrl, setUploadedUrl] = useState("")
  function handleFileSelect(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const selectedFile = event.target.files?.[0]
    if (!selectedFile) return
    setError("")
    // 100 MB maximum
    if (selectedFile.size > 100 * 1024 * 1024) {
      setError("File must be smaller than 100 MB.")
      return
    }
    if (
      !selectedFile.type.startsWith("image/") &&
      !selectedFile.type.startsWith("video/")
    ) {
      setError("Only image and video files are supported.")
      return
    }
    setFile(selectedFile)
    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)
  }
  async function publishPost() {
    setError("")
    if (!file) {
      setError("Choose a photo or video first.")
      return
    }
    const numericPrice = Number(price)
    if (!numericPrice || numericPrice < 0.01) {
      setError("Enter a price of at least $0.01.")
      return
    }
    setUploading(true)
    try {
      /*
       * Send the file to your server.
       *
       * Your server then uploads it to Pinata using
       * the private PINATA_JWT environment variable.
       */
      const formData = new FormData()
      formData.append("file", file)
      formData.append("caption", caption)
      formData.append("price", numericPrice.toString())
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })
      const data = await response.json()
      if (!response.ok) {
        throw new Error(
          data.error || "Upload failed.",
        )
      }
      setUploadedCid(data.cid)
      setUploadedUrl(data.url)
      setPublished(true)
    } catch (uploadError) {
      setError(
        uploadError instanceof Error
          ? uploadError.message
          : "Something went wrong.",
      )
    } finally {
      setUploading(false)
    }
  }
  if (published) {
    return (
      <main className="min-h-screen bg-black text-white">
        <header className="border-b border-white/10">
          <div className="mx-auto flex h-16 max-w-2xl items-center px-4">
            <Link
              href="/"
              className="mr-4 text-xl text-zinc-400"
            >
              ←
            </Link>
            <h1 className="font-bold">
              Create Post
            </h1>
          </div>
        </header>
        <section className="mx-auto max-w-2xl px-4 py-8">
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-8 text-center">
            <div className="text-4xl">✓</div>
            <h2 className="mt-4 text-xl font-bold">
              Post published
            </h2>
            <p className="mt-2 text-sm text-zinc-400">
              Your content has been uploaded to
              Pinata.
            </p>
            {preview && (
              <div className="mx-auto mt-6 max-w-sm overflow-hidden rounded-2xl border border-white/10">
                {file?.type.startsWith("video/") ? (
                  <video
                    src={preview}
                    controls
                    className="w-full"
                  />
                ) : (
                  <img
                    src={preview}
                    alt=""
                    className="w-full"
                  />
                )}
              </div>
            )}
            <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-4 text-left">
              <div className="text-xs uppercase tracking-widest text-zinc-600">
                IPFS CID
              </div>
              <div className="mt-2 break-all font-mono text-xs text-zinc-400">
                {uploadedCid}
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <a
                href={uploadedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-xl bg-white px-5 py-3 text-sm font-bold text-black"
              >
                View content
              </a>
              <Link
                href="/"
                className="flex-1 rounded-xl border border-white/10 px-5 py-3 text-sm font-bold"
              >
                View feed
              </Link>
            </div>
          </div>
        </section>
      </main>
    )
  }
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex h-16 max-w-2xl items-center px-4">
          <Link
            href="/"
            className="mr-4 text-xl text-zinc-400"
          >
            ←
          </Link>
          <h1 className="font-bold">
            Create Post
          </h1>
        </div>
      </header>
      <section className="mx-auto max-w-2xl px-4 py-8">
        {error && (
          <div className="mb-5 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">
            {error}
          </div>
        )}
        {/* FILE UPLOAD */}
        <div
          onClick={() =>
            fileInputRef.current?.click()
          }
          className="cursor-pointer overflow-hidden rounded-2xl border border-dashed border-white/15 bg-zinc-950 transition hover:border-fuchsia-500/50"
        >
          {preview ? (
            <div className="relative">
              {file?.type.startsWith("video/") ? (
                <video
                  src={preview}
                  className="max-h-[500px] w-full object-contain"
                  controls
                  onClick={(event) =>
                    event.stopPropagation()
                  }
                />
              ) : (
                <img
                  src={preview}
                  alt="Preview"
                  className="max-h-[500px] w-full object-contain"
                />
              )}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/80 px-4 py-2 text-xs font-bold backdrop-blur">
                Change media
              </div>
            </div>
          ) : (
            <div className="p-12 text-center">
              <div className="text-5xl">＋</div>
              <h2 className="mt-4 font-bold">
                Upload content
              </h2>
              <p className="mt-2 text-sm text-zinc-500">
                Photo or video
              </p>
              <div className="mt-6 inline-flex rounded-xl border border-white/10 bg-zinc-900 px-6 py-3 text-sm font-semibold">
                Choose file
              </div>
              <p className="mt-4 text-xs text-zinc-700">
                Maximum file size: 100 MB
              </p>
            </div>
          )}
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*,video/*"
          onChange={handleFileSelect}
          className="hidden"
        />
        {/* CAPTION */}
        <div className="mt-6">
          <label className="text-sm font-semibold">
            Caption
          </label>
          <textarea
            value={caption}
            onChange={(event) =>
              setCaption(event.target.value)
            }
            placeholder="Tell your fans about this post..."
            className="mt-2 min-h-28 w-full resize-none rounded-xl border border-white/10 bg-zinc-950 p-4 text-sm outline-none placeholder:text-zinc-600 focus:border-fuchsia-500"
          />
        </div>
        {/* PRICE */}
        <div className="mt-6">
          <label className="text-sm font-semibold">
            Unlock price
          </label>
          <div className="mt-3 grid grid-cols-4 gap-2">
            {[
              "0.10",
              "0.25",
              "0.99",
              "1.99",
            ].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setPrice(value)}
                className={`rounded-xl border px-3 py-3 text-sm font-bold ${
                  price === value
                    ? "border-fuchsia-500 bg-fuchsia-500/10 text-fuchsia-400"
                    : "border-white/10 bg-zinc-950 text-zinc-400"
                }`}
              >
                ${value}
              </button>
            ))}
          </div>
          <input
            value={price}
            onChange={(event) =>
              setPrice(event.target.value)
            }
            type="number"
            min="0.01"
            step="0.01"
            className="mt-3 w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm outline-none focus:border-fuchsia-500"
            placeholder="Custom price"
          />
        </div>
        {/* PAYMENT */}
        <div className="mt-8 rounded-xl border border-white/10 bg-zinc-950 p-4">
          <div className="flex justify-between text-sm">
            <span className="text-zinc-500">
              Fan unlock price
            </span>
            <span className="font-bold">
              ${Number(price || 0).toFixed(2)}
            </span>
          </div>
          <div className="mt-2 flex justify-between text-sm">
            <span className="text-zinc-500">
              Storage
            </span>
            <span className="text-blue-400">
              Pinata IPFS
            </span>
          </div>
          <div className="mt-2 flex justify-between text-sm">
            <span className="text-zinc-500">
              Payments
            </span>
            <span className="text-emerald-400">
              x402
            </span>
          </div>
        </div>
        {/* PUBLISH */}
        <Button
          disabled={uploading || !file}
          onClick={publishPost}
          className="mt-6 h-12 w-full rounded-xl bg-fuchsia-600 font-bold hover:bg-fuchsia-500 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {uploading
            ? "Uploading to Pinata..."
            : `Publish for $${Number(price || 0).toFixed(2)}`}
        </Button>
        <p className="mt-4 text-center text-xs leading-5 text-zinc-600">
          Your media is stored on IPFS through
          Pinata. Fan access can be protected by
          x402 payments.
        </p>
      </section>
    </main>
  )
}
