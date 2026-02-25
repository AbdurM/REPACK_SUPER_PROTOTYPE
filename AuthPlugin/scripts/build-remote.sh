#!/usr/bin/env bash

set -euo pipefail

PLATFORM="${1:-}"
if [ -z "$PLATFORM" ] || { [ "$PLATFORM" != "android" ] && [ "$PLATFORM" != "ios" ]; }; then
  echo "Usage: $0 <android|ios>"
  exit 1
fi

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

VERSION="${VERSION:-v$(node -p "require('./package.json').version")}" 
OUT_DIR="${OUT_DIR:-$ROOT_DIR/dist/$VERSION/$PLATFORM}"
GENERATED_DIR="$ROOT_DIR/build/generated/$PLATFORM"

rm -rf "$OUT_DIR"
mkdir -p "$OUT_DIR"

echo "Building AuthPlugin for $PLATFORM"
echo "Version: $VERSION"
echo "Output:  $OUT_DIR"

npx react-native bundle \
  --platform "$PLATFORM" \
  --entry-file index.js \
  --dev false \
  --minify true \
  --bundle-output "$OUT_DIR/index.bundle" \
  --assets-dest "$OUT_DIR"

if [ -d "$GENERATED_DIR" ]; then
  rsync -a "$GENERATED_DIR/" "$OUT_DIR/"
fi

echo
if [ -f "$OUT_DIR/mf-manifest.json" ]; then
  echo "OK: mf-manifest.json present"
else
  echo "WARNING: mf-manifest.json not found in $OUT_DIR"
fi

echo "Artifacts ready in: $OUT_DIR"
