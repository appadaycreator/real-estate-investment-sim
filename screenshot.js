const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:8888', { waitUntil: 'domcontentloaded' });
  await page.screenshot({ path: '/tmp/service-screenshot.png', fullPage: true });
  await browser.close();
})();
