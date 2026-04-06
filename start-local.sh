#!/bin/bash
# Hotel Lotus KCMO — local dev startup
set -e

echo "→ Installing dependencies..."
if command -v pnpm &> /dev/null; then
  pnpm install
else
  echo "  pnpm not found, using npm..."
  npm install --legacy-peer-deps
fi

echo "→ Starting dev server..."
npm run dev
