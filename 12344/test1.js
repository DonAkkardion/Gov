const playwright = require('playwright');

(async ()=>{
 {
  const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.demoblaze.com/');
  await page.click('id=login2');
  await page.fill('#loginusername', 'TommyVersetty');
  await page.fill('#loginpassword', 'TommyVersetty');
  await page.keyboard.press("Tab"); 
  await page.keyboard.press("Tab"); 
  await page.keyboard.press("Enter");

  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
  await delay(6000);
  await page.screenshot({ path: "./12344/Login.png" });
  console.log ('Done');
  await browser.close();
 }
})();