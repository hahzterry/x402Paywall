# Web Application & x402 API (`apps/web`)

Next.js 16 (React 19) App Router frontend and API gateway implementing the **x402 (HTTP 402 Payment Required)** protocol via Thirdweb.

## Architecture

- `app/api/route.ts`: Protected endpoint utilizing `thirdweb/x402` (`settlePayment` and `facilitator`) on Abstract Testnet (0.01 USDC).
- `app/page.tsx`: Landing page using the shared `@workspace/ui` components.
- `app/layout.tsx`: Root layout with `next-themes` dark mode support and Geist fonts.

## Environment Variables

Create `.env.local` in this directory or in the monorepo root:

```bash
THIRDWEB_SECRET_KEY=your_thirdweb_secret_key
THIRDWEB_SERVER_WALLET_ADDRESS=0xYourServerWalletAddress
```

## Running Locally

```bash
# From workspace root
pnpm --filter web dev

# Or directly in this directory
pnpm dev
```
