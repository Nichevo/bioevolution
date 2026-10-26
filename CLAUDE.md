# Bioevolution

Single-file browser sim. Edit `src/app.html` (a page fragment with no doctype), then run `./build.sh` to regenerate `index.html`.

## Every push

1. `./build.sh`
2. `node scripts/screenshot.js` to refresh the README images in `docs/`. Look at the images before committing, and update the README if a screenshot no longer matches what the text says.
3. Commit the source, `index.html` and the screenshots together.

The repo owner wants the README screenshots kept current on every change.
