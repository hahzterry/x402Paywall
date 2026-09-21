"use client"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@workspace/ui/components/button"
export default function PostPage({
  params,
}: {
  params: { id: string }
}) {
  const [unlocked, setUnlocked] = useState(false)
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-2xl items-center px-4">
          <Link href="/" className="mr-4 text-xl text-zinc-400">
            ←
          </Link>
          <span className="font-bold">Premium Post</span>
        </div>
      </header>
      <section className="mx-auto max-w-2xl">
        <div className="flex items-center gap-3 px-4 py-5">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-700 font-bold">
            M
          </div>
          <div>
            <div className="font-bold">
              Mia <span className="text-blue-400">✓</span>
            </div>
            <div className="text-xs text-zinc-500">@mia</div>
          </div>
        </div>
        <div className="relative overflow-hidden bg-zinc-950">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85"
            alt=""
            className={`aspect-[4/5] w-full object-cover transition-all duration-500 ${
              unlocked ? "" : "scale-105 blur-2xl brightness-50"
            }`}
          />
          {!unlocked && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="mx-6 w-full max-w-sm rounded-3xl border border-white/10 bg-black/85 p-7 text-center backdrop-blur-xl">
                <div className="text-3xl">🔒</div>
                <h1 className="mt-4 text-xl font-bold">
                  Unlock this post
                </h1>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  One payment gives you permanent access to this content.
                </p>
                <Button
                  onClick={() => setUnlocked(true)}
                  className="mt-6 h-12 w-full rounded-xl bg-fuchsia-600 font-bold hover:bg-fuchsia-500"
                >
                  Pay $0.99 to unlock
                </Button>
                <p className="mt-3 text-[11px] text-zinc-600">
                  x402 powered payment
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="px-4 py-5">
          <div className="flex justify-between">
            <div className="flex gap-5 text-sm text-zinc-400">
              <button>♡ 12.4K</button>
              <button>💬 842</button>
              <button>↗ Share</button>
            </div>
            <button>⋯</button>
          </div>
          <p className="mt-5 text-sm text-zinc-300">
            New exclusive drop 🔥
          </p>
          {unlocked && (
            <div className="mt-5 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm text-emerald-400">
              ✓ Content unlocked. You now have permanent access.
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
