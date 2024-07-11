const { test, expect } = require("@playwright/test");

test('single file uplode', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/File-Upload/index.html')
    await page.locator('#myFile').setInputFiles('tests/fileUplode/FileUplode Demo File 1.pdf')
    page.on('dialog', async simpleAlert => {
        await expect(simpleAlert.message()).toContain('Your file has now been uploaded!')
        await expect(simpleAlert.type()).toContain('alert')
        await simpleAlert.accept()
    })
    await page.locator('#submit-button').click()
    await expect(page.url()).toContain('filename=FileUplode+Demo+File+1.pdf')
    await page.waitForTimeout(4000)
})