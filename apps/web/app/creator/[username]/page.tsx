"use client"
import Link from "next/link"
import { Button } from "@workspace/ui/components/button"
const posts = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80",
    price: 0.99,
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=700&q=80",
    price: 1.49,
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=80",
    price: 2.99,
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=80",
    price: 0.49,
  },
  {
    id: "5",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=700&q=80",
    price: 4.99,
  },
  {
    id: "6",
    image:
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=700&q=80",
    price: 1.99,
  },
]
export default function CreatorPage({
  params,
}: {
  params: { username: string }
}) {
  const username = params.username.replace("@", "")
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-2xl items-center px-4">
          <Link
            href="/"
            className="mr-4 text-xl text-zinc-400 hover:text-white"
          >
            ←
          </Link>
          <div>
            <div className="font-bold">@{username}</div>
            <div className="text-xs text-zinc-500">Creator</div>
          </div>
        </div>
      </header>
      <section className="mx-auto max-w-2xl">
        <div className="px-5 py-8 text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-700 text-3xl font-black">
            {username.charAt(0).toUpperCase()}
          </div>
          <div className="mt-4 flex items-center justify-center gap-1 text-xl font-bold">
            {username}
            <span className="text-blue-400">✓</span>
          </div>
          <p className="mt-1 text-sm text-zinc-500">@{username}</p>
          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-zinc-300">
            Creator sharing exclusive photos, videos and private content.
            Pay only for what you want.
          </p>
          <div className="mt-5 flex justify-center gap-8 text-sm">
            <div>
              <div className="font-bold">125K</div>
              <div className="text-zinc-500">Followers</div>
            </div>
            <div>
              <div className="font-bold">84</div>
              <div className="text-zinc-500">Posts</div>
            </div>
            <div>
              <div className="font-bold">$4.2K</div>
              <div className="text-zinc-500">Creator sales</div>
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            <Button className="flex-1 rounded-full bg-white text-black hover:bg-zinc-200">
              Follow
            </Button>
            <Link
              href={`/messages/${username}`}
              className="flex flex-1 items-center justify-center rounded-full border border-white/15 bg-zinc-900 text-sm font-semibold hover:bg-zinc-800"
            >
              Message
            </Link>
          </div>
        </div>
        <div className="border-y border-white/10">
          <div className="flex justify-center">
            <button className="border-b-2 border-fuchsia-500 px-8 py-4 text-sm font-semibold">
              Posts
            </button>
            <button className="px-8 py-4 text-sm text-zinc-500">
              About
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-0.5 bg-black">
          {posts.map((post) => (
            <Link
              href={`/post/${post.id}`}
              key={post.id}
              className="group relative aspect-square overflow-hidden bg-zinc-900"
            >
              <img
                src={post.image}
                alt=""
                className="h-full w-full object-cover blur-md brightness-50 transition group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-full bg-black/75 px-3 py-2 text-xs font-bold">
                  🔒 ${post.price.toFixed(2)}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
