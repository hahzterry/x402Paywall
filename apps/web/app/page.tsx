"use client"
import { useState } from "react"
import { Button } from "@workspace/ui/components/button"
type Post = {
  id: number
  creator: string
  handle: string
  avatar: string
  verified?: boolean
  caption: string
  preview: string
  price: number
  type: "photo" | "video"
  likes: number
  comments: number
  unlocked?: boolean
}
const posts: Post[] = [
  {
    id: 1,
    creator: "Mia",
    handle: "@mia",
    avatar: "M",
    verified: true,
    caption: "New drop 🔥 Full set just uploaded.",
    preview:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85",
    price: 0.99,
    type: "video",
    likes: 12400,
    comments: 842,
  },
  {
    id: 2,
    creator: "Jade",
    handle: "@jade",
    avatar: "J",
    verified: true,
    caption: "You asked for it. Here it is.",
    preview:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85",
    price: 1.49,
    type: "photo",
    likes: 8300,
    comments: 391,
  },
]
function formatNumber(value: number) {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1)}M`
  }
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}K`
  }
  return value.toString()
}
export default function Page() {
  const [unlocked, setUnlocked] = useState<number[]>([])
  const [activeTab, setActiveTab] = useState<"for-you" | "following">("for-you")
  function unlockPost(id: number) {
    setUnlocked((current) =>
      current.includes(id) ? current : [...current, id],
    )
  }
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-2xl items-center justify-between px-4">
          <div>
            <div className="text-xl font-black tracking-tight">
              x402<span className="text-fuchsia-500">.</span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
              Creator Network
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="rounded-full px-3 py-2 text-sm text-zinc-400 hover:bg-white/5">
              Search
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-zinc-900 text-sm">
              H
            </button>
          </div>
        </div>
      </header>
      {/* TABS */}
      <div className="sticky top-16 z-40 border-b border-white/10 bg-black/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-2xl">
          <button
            onClick={() => setActiveTab("for-you")}
            className={`relative flex-1 py-4 text-sm font-semibold ${
              activeTab === "for-you"
                ? "text-white"
                : "text-zinc-500"
            }`}
          >
            For You
            {activeTab === "for-you" && (
              <span className="absolute bottom-0 left-1/2 h-0.5 w-14 -translate-x-1/2 rounded-full bg-fuchsia-500" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("following")}
            className={`relative flex-1 py-4 text-sm font-semibold ${
              activeTab === "following"
                ? "text-white"
                : "text-zinc-500"
            }`}
          >
            Following
            {activeTab === "following" && (
              <span className="absolute bottom-0 left-1/2 h-0.5 w-14 -translate-x-1/2 rounded-full bg-fuchsia-500" />
            )}
          </button>
        </div>
      </div>
      {/* FEED */}
      <section className="mx-auto max-w-2xl pb-28">
        {posts.map((post) => {
          const isUnlocked = unlocked.includes(post.id)
          return (
            <article
              key={post.id}
              className="border-b border-white/10"
            >
              {/* CREATOR */}
              <div className="flex items-center justify-between px-4 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 text-sm font-bold">
                    {post.avatar}
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-sm font-bold">
                      {post.creator}
                      {post.verified && (
                        <span className="text-blue-400">✓</span>
                      )}
                    </div>
                    <div className="text-xs text-zinc-500">
                      {post.handle}
                    </div>
                  </div>
                </div>
                <button className="rounded-full border border-white/10 px-4 py-1.5 text-xs font-semibold hover:bg-white/5">
                  Follow
                </button>
              </div>
              {/* CAPTION */}
              <div className="px-4 pb-3 text-sm text-zinc-300">
                {post.caption}
              </div>
              {/* MEDIA */}
              <div className="relative overflow-hidden bg-zinc-950">
                <img
                  src={post.preview}
                  alt=""
                  className={`aspect-[4/5] w-full object-cover transition duration-500 ${
                    isUnlocked
                      ? ""
                      : "scale-105 blur-2xl brightness-50"
                  }`}
                />
                {/* LOCK OVERLAY */}
                {!isUnlocked && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="mx-6 w-full max-w-xs rounded-3xl border border-white/10 bg-black/80 p-6 text-center shadow-2xl backdrop-blur-xl">
                      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-fuchsia-500/15 text-2xl">
                        🔒
                      </div>
                      <h2 className="text-lg font-bold">
                        Premium content
                      </h2>
                      <p className="mt-2 text-sm leading-6 text-zinc-400">
                        Pay once to unlock this content.
                        No subscription required.
                      </p>
                      <Button
                        onClick={() => unlockPost(post.id)}
                        className="mt-5 h-12 w-full rounded-xl bg-fuchsia-600 font-bold text-white hover:bg-fuchsia-500"
                      >
                        Unlock for ${post.price.toFixed(2)}
                      </Button>
                      <div className="mt-3 text-[11px] text-zinc-600">
                        Powered by x402
                      </div>
                    </div>
                  </div>
                )}
                {/* UNLOCKED LABEL */}
                {isUnlocked && (
                  <div className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1.5 text-xs font-semibold backdrop-blur">
                    ✓ Unlocked
                  </div>
                )}
              </div>
              {/* ACTIONS */}
              <div className="flex items-center justify-between px-4 py-4">
                <div className="flex items-center gap-5">
                  <button className="text-sm text-zinc-400 hover:text-white">
                    ♡ {formatNumber(post.likes)}
                  </button>
                  <button className="text-sm text-zinc-400 hover:text-white">
                    💬 {formatNumber(post.comments)}
                  </button>
                  <button className="text-sm text-zinc-400 hover:text-white">
                    ↗
                  </button>
                </div>
                <button className="text-sm text-zinc-500 hover:text-white">
                  ⋯
                </button>
              </div>
            </article>
          )
        })}
      </section>
      {/* BOTTOM NAV */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-black/95 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-2xl items-center justify-around">
          <button className="flex flex-col items-center gap-1 text-white">
            <span className="text-lg">⌂</span>
            <span className="text-[10px]">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-zinc-500">
            <span className="text-lg">⌕</span>
            <span className="text-[10px]">Discover</span>
          </button>
          <button className="flex h-11 w-11 items-center justify-center rounded-full bg-fuchsia-600 text-xl shadow-lg shadow-fuchsia-600/20">
            +
          </button>
          <button className="flex flex-col items-center gap-1 text-zinc-500">
            <span className="text-lg">♡</span>
            <span className="text-[10px]">Activity</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-zinc-500">
            <span className="text-lg">◉</span>
            <span className="text-[10px]">Profile</span>
          </button>
        </div>
      </nav>
    </main>
  )
}
