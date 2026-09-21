"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@workspace/ui/components/button"
export default function UploadPage() {
  const [price, setPrice] = useState("0.99")
  const [published, setPublished] = useState(false)
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex h-16 max-w-2xl items-center px-4">
          <Link href="/" className="mr-4 text-xl text-zinc-400">
            ←
          </Link>
          <h1 className="font-bold">Create Post</h1>
        </div>
      </header>
      <section className="mx-auto max-w-2xl px-4 py-8">
        {published ? (
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-8 text-center">
            <div className="text-4xl">✓</div>
            <h2 className="mt-4 text-xl font-bold">
              Post published
            </h2>
            <p className="mt-2 text-sm text-zinc-400">
              Your content is now available for purchase.
            </p>
            <Link
              href="/"
              className="mt-6 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-bold text-black"
            >
              View feed
            </Link>
          </div>
        ) : (
          <>
            <div className="rounded-2xl border border-dashed border-white/15 bg-zinc-950 p-10 text-center">
              <div className="text-4xl">＋</div>
              <h2 className="mt-4 font-bold">
                Upload content
              </h2>
              <p className="mt-2 text-sm text-zinc-500">
                Photo or video
              </p>
              <button className="mt-6 rounded-xl border border-white/10 bg-zinc-900 px-6 py-3 text-sm font-semibold hover:bg-zinc-800">
                Choose file
              </button>
            </div>
            <div className="mt-6">
              <label className="text-sm font-semibold">
                Caption
              </label>
              <textarea
                placeholder="Tell your fans about this post..."
                className="mt-2 min-h-28 w-full resize-none rounded-xl border border-white/10 bg-zinc-950 p-4 text-sm outline-none placeholder:text-zinc-600 focus:border-fuchsia-500"
              />
            </div>
            <div className="mt-6">
              <label className="text-sm font-semibold">
                Unlock price
              </label>
              <div className="mt-3 grid grid-cols-4 gap-2">
                {["0.10", "0.25", "0.99", "1.99"].map(
                  (value) => (
                    <button
                      key={value}
                      onClick={() => setPrice(value)}
                      className={`rounded-xl border px-3 py-3 text-sm font-bold ${
                        price === value
                          ? "border-fuchsia-500 bg-fuchsia-500/10 text-fuchsia-400"
                          : "border-white/10 bg-zinc-950 text-zinc-400"
                      }`}
                    >
                      ${value}
                    </button>
                  ),
                )}
              </div>
              <input
                value={price}
                onChange={(event) => setPrice(event.target.value)}
                type="number"
                min="0.01"
                step="0.01"
                className="mt-3 w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm outline-none focus:border-fuchsia-500"
                placeholder="Custom price"
              />
            </div>
            <div className="mt-8 rounded-xl border border-white/10 bg-zinc-950 p-4">
              <div className="flex justify-between text-sm">
                <span className="text-zinc-500">
                  Your price
                </span>
                <span className="font-bold">
                  ${Number(price || 0).toFixed(2)}
                </span>
              </div>
              <div className="mt-2 flex justify-between text-sm">
                <span className="text-zinc-500">
                  Payment
                </span>
                <span className="text-emerald-400">
                  x402
                </span>
              </div>
            </div>
            <Button
              onClick={() => setPublished(true)}
              className="mt-6 h-12 w-full rounded-xl bg-fuchsia-600 font-bold hover:bg-fuchsia-500"
            >
              Publish for ${Number(price || 0).toFixed(2)}
            </Button>
          </>
        )}
      </section>
    </main>
  )
}
