// Regenerates the README screenshots in docs/.
// Usage: node scripts/screenshot.js   (needs Playwright: npm i -g playwright && npx playwright install chromium)
const path = require('path');
const { chromium } = require('playwright');

const root = path.resolve(__dirname, '..');
const page_url = 'file://' + path.join(root, 'index.html');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1400, height: 850 } });
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.goto(page_url);

  // let a few generations evolve at 8x before taking pictures
  for (let i = 0; i < 3; i++) await page.click('#bSpeed');
  await page.waitForTimeout(20000);
  await page.click('#bSpeed');
  await page.waitForTimeout(1500);

  // hover the creature nearest the middle so the inspector card shows
  const spot = await page.evaluate(() => {
    const canvas = document.getElementById('world');
    const ctx = canvas.getContext('2d');
    const { width, height } = canvas.getBoundingClientRect();
    const d = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    const sx = canvas.width / width;
    let best = null, bd = Infinity;
    for (let y = 100; y < height - 100; y += 4) for (let x = 400; x < width - 300; x += 4) {
      const i = ((y * sx | 0) * canvas.width + (x * sx | 0)) * 4;
      if (d[i] + d[i + 1] + d[i + 2] < 300) continue;
      const dist = Math.hypot(x - width / 2, y - height / 2);
      if (dist < bd) { bd = dist; best = { x, y }; }
    }
    return best;
  });
  if (spot) await page.mouse.move(spot.x, spot.y);
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(root, 'docs/screenshot.png') });

  // close-up of the creatures without the panels
  await page.mouse.move(5, 845);
  await page.evaluate(() => { for (const id of ['collapse', 'collapse2', 'bTrails']) document.getElementById(id).click(); });
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(root, 'docs/closeup.png'), clip: { x: 450, y: 225, width: 500, height: 400 } });

  // phone layout
  await page.setViewportSize({ width: 390, height: 800 });
  await page.reload();
  await page.waitForTimeout(3000);
  await page.screenshot({ path: path.join(root, 'docs/phone.png') });

  await browser.close();
  if (errors.length) { console.error('Page errors:', errors); process.exit(1); }
  console.log('Wrote docs/screenshot.png, docs/closeup.png, docs/phone.png');
})();
