#!/bin/sh
# Freeze the current build as versions/<id>.html so it stays playable after later changes.
# Usage: scripts/snapshot.sh v2
set -e
cd "$(dirname "$0")/.."
id="$1"
[ -n "$id" ] || { echo "usage: scripts/snapshot.sh <version id>" >&2; exit 1; }
grep -q "const APP_VERSION = '$id';" src/app.html || { echo "src/app.html says a different APP_VERSION than $id" >&2; exit 1; }
./build.sh
# inside versions/ the list script is a sibling, and links back to the root need ../
sed -e 's|<script src="versions/list.js"></script>|<script>window.BIO_ROOT = "../";</script><script src="list.js"></script>|' index.html > "versions/$id.html"
echo "Wrote versions/$id.html"
