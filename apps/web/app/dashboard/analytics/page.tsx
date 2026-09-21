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
            {[35, 52, 41, 68, 57, 84, 72, 91, 76, 100, 87, 96].map(
              (height, index) => (
                <div
                  key={index}
                  className="flex-1 rounded-t bg-fuchsia-600/80"
                  style={{ height: `${height}%` }}
                />
              ),
            )}
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
:::
### 9. `app/dashboard/payouts/page.tsx`
:::writing{variant="document" id="47028" title="Payouts Page"}
```tsx
"use client"
import Link from "next/link"
import { Button } from "@workspace/ui/components/button"
export default function PayoutsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-2xl items-center px-4 py-5">
          <Link
            href="/dashboard"
            className="mr-4 text-xl text-zinc-500"
          >
            ←
          </Link>
          <h1 className="font-bold">Payouts</h1>
        </div>
      </header>
      <section className="mx-auto max-w-2xl px-4 py-8">
        <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6">
          <div className="text-xs uppercase tracking-widest text-zinc-500">
            Available balance
          </div>
          <div className="mt-3 text-4xl font-black">
            $482.91
          </div>
          <Button className="mt-6 h-12 w-full rounded-xl bg-fuchsia-600 font-bold hover:bg-fuchsia-500">
            Withdraw funds
          </Button>
        </div>
        <div className="mt-6 rounded-2xl border border-white/10 bg-zinc-950 p-5">
          <h2 className="font-bold">Payment network</h2>
          <div className="mt-4 rounded-xl border border-white/10 p-4">
            <div className="text-sm font-semibold">
              x402
            </div>
            <div className="mt-1 text-xs text-zinc-500">
              Instant creator payments
            </div>
          </div>
        </div>
        <div className="mt-6 rounded-2xl border border-white/10 bg-zinc-950 p-5">
          <h2 className="font-bold">Recent payouts</h2>
          <div className="mt-4 space-y-4 text-sm">
            <div className="flex justify-between">
              <span className="text-zinc-500">
                Sep 18
              </span>
              <span className="text-emerald-400">
                +$382.10
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-500">
                Sep 11
              </span>
              <span className="text-emerald-400">
                +$214.82
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
:::
### 10. `app/discover/page.tsx`
:::writing{variant="document" id="65139" title="Discover Page"}
```tsx
"use client"
import Link from "next/link"
const creators = [
  {
    username: "mia",
    name: "Mia",
    followers: "125K",
    avatar: "M",
  },
  {
    username: "jade",
    name: "Jade",
    followers: "84K",
    avatar: "J",
  },
  {
    username: "luna",
    name: "Luna",
    followers: "62K",
    avatar: "L",
  },
  {
    username: "aria",
    name: "Aria",
    followers: "41K",
    avatar: "A",
  },
]
export default function DiscoverPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto max-w-2xl px-4 py-6">
          <h1 className="text-2xl font-black">
            Discover
          </h1>
          <div className="mt-5 rounded-xl border border-white/10 bg-zinc-950 px-4 py-3">
            <input
              placeholder="Search creators..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-600"
            />
          </div>
        </div>
      </header>
      <section className="mx-auto max-w-2xl px-4 py-6">
        <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-500">
          Popular creators
        </h2>
        <div className="mt-4 space-y-2">
          {creators.map((creator) => (
            <Link
              key={creator.username}
              href={`/creator/${creator.username}`}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-zinc-950 p-4 hover:bg-zinc-900"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-700 text-lg font-black">
                {creator.avatar}
              </div>
              <div className="flex-1">
                <div className="font-bold">
                  {creator.name}{" "}
                  <span className="text-blue-400">
                    ✓
                  </span>
                </div>
                <div className="text-sm text-zinc-500">
                  @{creator.username}
                </div>
                <div className="mt-1 text-xs text-zinc-600">
                  {creator.followers} followers
                </div>
              </div>
              <span className="rounded-full border border-white/10 px-4 py-2 text-xs font-bold">
                View
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
:::
These pages give you the **entire UI skeleton outside `/`**. The next files I would build are the API layer, because right now the buttons are intentionally demo interactions rather than real payments.
The critical production files are:
```text
app/api/content/[id]/route.ts
app/api/posts/route.ts
app/api/creators/route.ts
app/api/messages/route.ts
app/api/tips/route.ts
app/api/payouts/route.ts

Those are where I’d connect x402 + wallet/payment verification + protected media, rather than faking the unlock in the browser.
