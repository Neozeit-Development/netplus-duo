#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"

echo "Building frontend..."
(cd "$ROOT/frontend" && npm ci && npm run build)

echo "Starting Flask on http://127.0.0.1:5000"
cd "$ROOT"
exec python3 app.py
