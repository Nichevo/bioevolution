# Bioevolution

Single-file browser sim. Edit `src/app.html` (a page fragment with no doctype), then run `./build.sh` to regenerate `index.html`.

## Every push

1. `./build.sh`
2. `node scripts/screenshot.js` to refresh the README images in `docs/`. Look at the images before committing, and update the README if a screenshot no longer matches what the text says.
3. Commit the source, `index.html` and the screenshots together.

The repo owner wants the README screenshots kept current on every change.

## Versions

The owner wants to be able to go back to older versions. Each release has an id (`v1`, `v2`, ...).

- `const APP_VERSION` in `src/app.html` names the release being worked on.
- When a release is done: add it to the top of `versions/list.js`, run `scripts/snapshot.sh <id>`, add a section to `CHANGELOG.md`, and commit. (Pushing git tags is blocked from Claude's cloud sessions, so the `versions/` folder is the record.)
- Never edit an existing `versions/<id>.html` except to fix it being unplayable.
