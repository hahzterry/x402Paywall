"use client"
import Link from "next/link"
const conversations = [
  {
    username: "mia",
    name: "Mia",
    avatar: "M",
    message: "I sent you something 👀",
    price: "$2.00",
  },
  {
    username: "jade",
    name: "Jade",
    avatar: "J",
    message: "Custom request available",
    price: "$10.00",
  },
]
export default function MessagesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto max-w-2xl px-4 py-5">
          <h1 className="text-xl font-bold">Messages</h1>
          <p className="mt-1 text-sm text-zinc-500">
            Private creator conversations
          </p>
        </div>
      </header>
      <section className="mx-auto max-w-2xl">
        {conversations.map((conversation) => (
          <Link
            href={`/messages/${conversation.username}`}
            key={conversation.username}
            className="flex items-center gap-4 border-b border-white/10 px-4 py-5 hover:bg-white/[0.03]"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-700 font-bold">
              {conversation.avatar}
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-bold">
                {conversation.name}
              </div>
              <div className="mt-1 truncate text-sm text-zinc-500">
                {conversation.message}
              </div>
            </div>
            <div className="text-xs font-bold text-fuchsia-400">
              {conversation.price}
            </div>
          </Link>
        ))}
      </section>
    </main>
  )
} 
