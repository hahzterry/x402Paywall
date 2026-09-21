"use client"
import Link from "next/link"
const content = [
  {
    title: "New exclusive drop",
    price: "$0.99",
    sales: 842,
    revenue: "$834.58",
    status: "Published",
  },
  {
    title: "Behind the scenes",
    price: "$1.99",
    sales: 214,
    revenue: "$425.86",
    status: "Published",
  },
  {
    title: "Private video",
    price: "$4.99",
    sales: 82,
    revenue: "$409.18",
    status: "Published",
  },
]
export default function ContentPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-4xl items-center px-4 py-5">
          <Link
            href="/dashboard"
            className="mr-4 text-xl text-zinc-500"
          >
            ←
          </Link>
          <h1 className="font-bold">Content</h1>
        </div>
      </header>
      <section className="mx-auto max-w-4xl px-4 py-8">
        <Link
          href="/upload"
          className="mb-6 block rounded-xl bg-fuchsia-600 px-5 py-3 text-center text-sm font-bold hover:bg-fuchsia-500"
        >
          + Upload new content
        </Link>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950">
          {content.map((item) => (
            <div
              key={item.title}
              className="border-b border-white/10 p-5 last:border-0"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-bold">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-xs text-zinc-500">
                    {item.status} · {item.sales} purchases
                  </p>
                </div>
                <div className="text-right">
                  <div className="font-bold">
                    {item.price}
                  </div>
                  <div className="mt-1 text-xs text-emerald-400">
                    {item.revenue}
                  </div>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <button className="rounded-lg border border-white/10 px-4 py-2 text-xs font-semibold">
                  Edit
                </button>
                <button className="rounded-lg border border-white/10 px-4 py-2 text-xs font-semibold text-red-400">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
