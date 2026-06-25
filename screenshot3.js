const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:8888', { waitUntil: 'networkidle' });
  await page.screenshot({ path: '/tmp/service-screenshot3.png', fullPage: true });
  await browser.close();
})();
