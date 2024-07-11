const { test, expect } = require("@playwright/test");

test('shedowDom', async ({ page }) => {
    await page.goto('https://books-pwakit.appspot.com/')
    await page.locator('https://books-pwakit.appspot.com/')
    await page.locator("#input").fill('Aman')
})