"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@workspace/ui/components/button"
export default function MessagePage({
  params,
}: {
  params: { username: string }
}) {
  const [sent, setSent] = useState(false)
  const username = params.username.replace("@", "")
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex h-16 w-full max-w-2xl items-center px-4">
          <Link
            href="/messages"
            className="mr-4 text-xl text-zinc-400"
          >
            ←
          </Link>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-700 text-sm font-bold">
            {username.charAt(0).toUpperCase()}
          </div>
          <div className="ml-3">
            <div className="font-bold">{username}</div>
            <div className="text-xs text-emerald-400">
              Available
            </div>
          </div>
        </div>
      </header>
      <section className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-end">
        <div className="space-y-4 px-4 py-6">
          <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-zinc-900 p-4 text-sm text-zinc-300">
            Hey 👋 Send me a message or make a custom request.
          </div>
          <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-fuchsia-600 p-4 text-sm">
            Can you make a custom video?
          </div>
          <div className="rounded-2xl border border-fuchsia-500/20 bg-fuchsia-500/5 p-4">
            <div className="text-sm font-bold">
              Custom video request
            </div>
            <div className="mt-1 text-xs text-zinc-500">
              Creator sets the price before accepting.
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-lg font-black">
                $10.00
              </span>
              <Button
                onClick={() => setSent(true)}
                className="rounded-xl bg-fuchsia-600 font-bold hover:bg-fuchsia-500"
              >
                {sent ? "Request Sent" : "Pay & Request"}
              </Button>
            </div>
          </div>
        </div>
      </section>
      <div className="border-t border-white/10 bg-black">
        <div className="mx-auto flex max-w-2xl gap-2 p-3">
          <input
            placeholder="Write a message..."
            className="min-w-0 flex-1 rounded-full border border-white/10 bg-zinc-950 px-5 py-3 text-sm outline-none focus:border-fuchsia-500"
          />
          <Button className="rounded-full bg-fuchsia-600 px-5 font-bold">
            Send
          </Button>
        </div>
      </div>
    </main>
  )
}
