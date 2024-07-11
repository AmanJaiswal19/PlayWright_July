const { test, expect } = require('@playwright/test')

//doubleclick 
//rightclick
//mousehover
//click

test('verify the db click', async ({ page }) => {
    await page.goto('https://demoqa.com/buttons')
    await page.locator('#doubleClickBtn').dblclick()
    expect(await page.locator('#doubleClickMessage')).toBeVisible()
})

test('verify the rightclick', async ({ page }) => {
    await page.goto('https://demoqa.com/buttons')
    await page.locator('#rightClickBtn').click({ button: 'right' })
    expect(await page.locator('#rightClickMessage')).toBeVisible()
})

test.only('Verify mouse hover action in playwright', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/Actions/index.html')
    await page.getByText('Hover Over Me Third!').hover()
    await page.getByText('Link 1').nth(2).click()
    page.on('dialog', async simpleAlert => {
        await expect(simpleAlert.message()).toContain('Well done you clicked on the link!')
        await simpleAlert.accept()
    })
    await page.waitForTimeout(4000)
})


