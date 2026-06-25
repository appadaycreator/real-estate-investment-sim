const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:8888', { waitUntil: 'domcontentloaded' });
  await page.screenshot({ path: '/tmp/service-screenshot2.png', fullPage: true });
  
  // テスト入力
  await page.fill('#target-yield', '8');
  await page.fill('#target-cf', '5');
  await page.fill('#price', '2000');
  await page.fill('#rent', '10');
  await page.fill('#loan', '6');
  await page.fill('#running', '1.5');
  await page.fill('#vacancy', '5');
  
  await page.click('button:has-text("利回りを計算")');
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/service-result.png', fullPage: true });

  await browser.close();
})();
