"use client"
import Link from "next/link"
const stats = [
  ["Content sales", "$291.40"],
  ["Tips", "$104.20"],
  ["Paid messages", "$61.00"],
  ["Other", "$26.31"],
]
const content = [
  ["Video #182", "$84.20", "842 sales"],
  ["Photo #91", "$51.40", "514 sales"],
  ["Video #173", "$44.10", "147 sales"],
]
export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-5">
          <div>
            <h1 className="text-xl font-bold">
              Creator Dashboard
            </h1>
            <p className="mt-1 text-xs text-zinc-500">
              @yourname
            </p>
          </div>
          <Link
            href="/upload"
            className="rounded-xl bg-fuchsia-600 px-4 py-2 text-sm font-bold hover:bg-fuchsia-500"
          >
            + Create
          </Link>
        </div>
      </header>
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6">
            <div className="text-xs uppercase tracking-widest text-zinc-500">
              Available
            </div>
            <div className="mt-3 text-3xl font-black">
              $482.91
            </div>
            <div className="mt-2 text-sm text-emerald-400">
              +23.4% this month
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6">
            <div className="text-xs uppercase tracking-widest text-zinc-500">
              Fans
            </div>
            <div className="mt-3 text-3xl font-black">
              12,482
            </div>
            <div className="mt-2 text-sm text-zinc-500">
              +842 this month
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6">
            <div className="text-xs uppercase tracking-widest text-zinc-500">
              Content
            </div>
            <div className="mt-3 text-3xl font-black">
              84
            </div>
            <div className="mt-2 text-sm text-zinc-500">
              3.2K purchases
            </div>
          </div>
        </div>
        <div className="mt-8 rounded-2xl border border-white/10 bg-zinc-950">
          <div className="border-b border-white/10 p-5">
            <h2 className="font-bold">Revenue breakdown</h2>
          </div>
          {stats.map(([label, amount]) => (
            <div
              key={label}
              className="flex justify-between border-b border-white/5 px-5 py-4 text-sm last:border-0"
            >
              <span className="text-zinc-500">
                {label}
              </span>
              <span className="font-bold">
                {amount}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-white/10 bg-zinc-950">
          <div className="border-b border-white/10 p-5">
            <h2 className="font-bold">Top content</h2>
          </div>
          {content.map(([name, amount, sales]) => (
            <div
              key={name}
              className="flex items-center justify-between border-b border-white/5 px-5 py-5 last:border-0"
            >
              <div>
                <div className="font-semibold">
                  {name}
                </div>
                <div className="mt-1 text-xs text-zinc-500">
                  {sales}
                </div>
              </div>
              <div className="font-bold text-emerald-400">
                {amount}
              </div>
            </div>
          ))}
        </div>
        <Link
          href="/dashboard/payouts"
          className="mt-6 block rounded-xl border border-white/10 bg-zinc-950 p-5 text-sm font-bold hover:bg-zinc-900"
        >
          Manage payouts →
        </Link>
      </section>
    </main>
  )
}
