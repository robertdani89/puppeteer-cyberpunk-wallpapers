const puppeteer = require('puppeteer');
const pageCount = 14;

(async () => {
const browser = await puppeteer.launch({headless: false});
const page = await browser.newPage();
await page.setViewport({ width: 1920, height: 1600 })
for (let i = 1;i <= pageCount;i++) {
    await page.goto('https://wall.alphacoders.com/tags.php?tid=3561&page=' + i);
    const links = await page.$$('div.thumb-container > div.boxcaption > div.overlay > div:nth-child(3) > span');
    for (const link of links) {
        await link.click();
        await page.waitFor(5000);
    }
}

await browser.close();
})();