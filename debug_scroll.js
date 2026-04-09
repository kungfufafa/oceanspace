const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('file:///Users/apriansyahrs/Documents/Code/complete_selular/oceanspace/career-apply.html');
  await page.waitForTimeout(2000);
  const overflows = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('*'))
      .filter(el => el.scrollWidth > el.clientWidth)
      .map(el => ({tag: el.tagName, id: el.id, class: el.className, sW: el.scrollWidth, cW: el.clientWidth}));
  });
  console.log("Empty View:", overflows);
  
  await page.goto('file:///Users/apriansyahrs/Documents/Code/complete_selular/oceanspace/career-apply.html?job=staff-audit-keuangan');
  await page.waitForTimeout(3000);
  const overflows2 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('*'))
      .filter(el => el.scrollWidth > el.clientWidth)
      .map(el => ({tag: el.tagName, id: el.id, class: el.className, sW: el.scrollWidth, cW: el.clientWidth}));
  });
  console.log("Loaded View:", overflows2);
  await browser.close();
})();
