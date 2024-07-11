const { test, expect } = require('@playwright/test')
const exp = require('constants')

test('Handling radio button in playwright', async ({ page }) => {
    await page.goto('https://www.demo.guru99.com/test/radio.html')
    await expect(page.locator('[id="vfb-7-1"]')).not.toBeChecked()
    await page.locator('[id="vfb-7-1"]').check()
    await expect(page.locator('[id="vfb-7-1"]')).toBeChecked()
    await page.locator('[id="vfb-7-2"]').check()
    await expect(page.locator('[id="vfb-7-1"]')).not.toBeChecked()
})

test('Handling check box in playwright', async ({ page }) => {
    await page.goto('https://www.demo.guru99.com/test/radio.html')
    await expect(page.locator('[id="vfb-6-0"]')).not.toBeChecked()
    await page.locator('[id="vfb-6-0"]').check()
    await expect(page.locator('input[id="vfb-6-0"]')).toBeChecked()
})

test.only('Handling chack box using click method', async ({ page }) => {
    await page.goto('https://www.demo.guru99.com/test/radio.html')
    await page.locator('input[id="vfb-6-0"]').click()
    await page.waitForTimeout(4000)
    await expect(page.locator('input[id="vfb-6-0"]')).toBeChecked()
})