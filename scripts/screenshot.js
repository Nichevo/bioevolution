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

  // the New dish dialog
  await page.click('#bReset');
  await page.waitForTimeout(400);
  const box = await page.locator('#setup > *').first().boundingBox();
  await page.screenshot({ path: path.join(root, 'docs/new-dish.png'), clip: { x: box.x - 8, y: box.y - 8, width: box.width + 16, height: box.height + 16 } });
  await page.click('#setupCancel');

  // let a few generations evolve at 8x before taking pictures
  for (let i = 0; i < 3; i++) await page.click('#bSpeed');
  await page.waitForTimeout(20000);
  await page.click('#bSpeed');
  await page.waitForTimeout(1500);

  // Find creatures by their bright, saturated colours (food bits are pale and rocks are grey, so neither counts).
  // Returns the creature pixel nearest the middle, and the middle of the busiest 200px patch.
  const findLife = () => page.evaluate(() => {
    const canvas = document.getElementById('world');
    const ctx = canvas.getContext('2d');
    const { width, height } = canvas.getBoundingClientRect();
    const d = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    const sx = canvas.width / width;
    let best = null, bd = Infinity;
    const cells = new Map();
    for (let y = 100; y < height - 100; y += 4) for (let x = 400; x < width - 300; x += 4) {
      const i = ((y * sx | 0) * canvas.width + (x * sx | 0)) * 4;
      const r = d[i], g = d[i + 1], b = d[i + 2];
      if (r + g + b < 300 || Math.max(r, g, b) - Math.min(r, g, b) < 90) continue;
      const dist = Math.hypot(x - width / 2, y - height / 2);
      if (dist < bd) { bd = dist; best = { x, y }; }
      const k = Math.floor(x / 50) + ',' + Math.floor(y / 50);
      cells.set(k, (cells.get(k) || 0) + 1);
    }
    let busy = null, bn = -1;
    for (let cy = 4; cy < height / 50 - 4; cy++) for (let cx = 10; cx < (width - 300) / 50 - 2; cx++) {
      let n = 0;
      for (let j = -2; j < 2; j++) for (let k = -2; k < 2; k++) n += cells.get((cx + k) + ',' + (cy + j)) || 0;
      if (n > bn) { bn = n; busy = { x: cx * 50, y: cy * 50 }; }
    }
    return { best, busy };
  });
  // hover the creature nearest the middle so the inspector card shows
  const { best: spot } = await findLife();
  if (spot) await page.mouse.move(spot.x, spot.y);
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(root, 'docs/screenshot.png') });

  // close-up of the creatures without the panels
  await page.mouse.move(5, 845);
  await page.evaluate(() => { for (const id of ['collapse', 'collapse2', 'bTrails']) document.getElementById(id).click(); });
  await page.waitForTimeout(400);
  const { busy } = await findLife();
  const at = busy || { x: 700, y: 425 };
  await page.mouse.move(at.x, at.y);
  await page.mouse.wheel(0, -700); // zoom in about 3x on the busiest part of the dish
  await page.waitForTimeout(600);
  const cx = Math.min(Math.max(at.x - 250, 0), 900), cy = Math.min(Math.max(at.y - 200, 0), 450);
  await page.screenshot({ path: path.join(root, 'docs/closeup.png'), clip: { x: cx, y: cy, width: 500, height: 400 } });
  await page.click('#zReset');

  // graphs drawer and a species page
  await page.evaluate(() => { for (const id of ['collapse', 'bTrails']) document.getElementById(id).click(); });
  await page.click('#bGraphs');
  await page.waitForTimeout(1500);
  await page.screenshot({ path: path.join(root, 'docs/graphs.png') });
  await page.click('[data-tab=species]');
  await page.waitForTimeout(1200);
  await page.screenshot({ path: path.join(root, 'docs/groups.png') });
  await page.click('.sprow');
  await page.waitForTimeout(1500);
  await page.screenshot({ path: path.join(root, 'docs/species.png') });
  // its family tree, across the whole dish
  await page.click('[data-tree=dish]');
  await page.waitForTimeout(600);
  await page.evaluate(() => {
    // scroll the tree to the top of the drawer, just below its sticky header
    const t = document.querySelector('section.tree');
    t.scrollIntoView();
    let p = t.parentElement;
    while (p && p.scrollHeight <= p.clientHeight) p = p.parentElement;
    if (p) p.scrollTop -= 70;
  });
  await page.waitForTimeout(300);
  const tb = await (await page.$('section.tree')).boundingBox();
  await page.screenshot({ path: path.join(root, 'docs/tree.png'), clip: { x: tb.x - 8, y: Math.max(0, tb.y - 8), width: tb.width + 16, height: Math.min(tb.height + 16, 850 - Math.max(0, tb.y - 8)) } });
  await page.click('[data-act=close]');
  // the balance controls
  await page.evaluate(() => { if (document.getElementById('panel').classList.contains('min')) document.getElementById('collapse').click(); document.getElementById('balance').open = true; });
  await page.waitForTimeout(400);
  const pb = await (await page.$('#balance')).boundingBox();
  const top = pb.y - 120;
  await page.screenshot({ path: path.join(root, 'docs/balance.png'), clip: { x: pb.x - 12, y: top, width: pb.width + 24, height: pb.y + pb.height + 12 - top } });

  // phone layout
  await page.setViewportSize({ width: 390, height: 800 });
  await page.reload();
  await page.waitForTimeout(3000);
  await page.screenshot({ path: path.join(root, 'docs/phone.png') });

  await browser.close();
  if (errors.length) { console.error('Page errors:', errors); process.exit(1); }
  console.log('Wrote docs/screenshot.png, new-dish.png, closeup.png, graphs.png, groups.png, species.png, tree.png, balance.png, phone.png');
})();
