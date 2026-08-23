import type { NextConfig } from "next"
import { loadEnvConfig } from "@next/env"
import path from "node:path"
import { fileURLToPath } from "node:url"

// Next.js only auto-loads .env* from this app directory (apps/web).
// Also load the monorepo root so a root .env.local is picked up.
const appDir = path.dirname(fileURLToPath(import.meta.url))
loadEnvConfig(path.resolve(appDir, "../.."))

const nextConfig: NextConfig = {
  transpilePackages: ["@workspace/ui"],
}

export default nextConfig
