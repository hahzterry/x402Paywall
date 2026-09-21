"use client"

import Link from "next/link"

export default function AnalyticsPage() {
  const metrics = [
    ["Views", "284,291"],
    ["Unlocks", "18,492"],
    ["Conversion", "6.5%"],
    ["Revenue", "$4,281.32"],
    ["Tips", "$821.44"],
    ["New fans", "3,842"],
  ]

  const revenueData = [35, 52, 41, 68, 57, 84, 72, 91, 76, 100, 87, 96]

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-4xl items-center px-4 py-5">
          <Link
            href="/dashboard"
            className="mr-4 text-xl text-zinc-500 transition-colors hover:text-white"
            aria-label="Back to dashboard"
          >
            ←
          </Link>

          <h1 className="font-bold">Analytics</h1>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {metrics.map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-zinc-950 p-5"
            >
              <div className="text-xs uppercase tracking-widest text-zinc-600">
                {label}
              </div>

              <div className="mt-3 text-2xl font-black">
                {value}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-zinc-950 p-6">
          <h2 className="font-bold">Revenue</h2>

          <div className="mt-8 flex h-48 items-end gap-2">
            {revenueData.map((height, index) => (
              <div
                key={index}
                className="flex-1 rounded-t bg-fuchsia-600/80 transition-opacity hover:opacity-80"
                style={{ height: `${height}%` }}
                aria-label={`Revenue month ${index + 1}: ${height}%`}
              />
            ))}
          </div>

          <div className="mt-4 flex justify-between text-xs text-zinc-600">
            <span>Jan</span>
            <span>Jun</span>
            <span>Dec</span>
          </div>
        </div>
      </section>
    </main>
  )
}
