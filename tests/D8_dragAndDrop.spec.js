const { test, expect } = require('@playwright/test')

test('Verify the drag&drop using inbuild command', async ({ page }) => {
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    const rome = await page.locator('#box6')
    const italy = await page.locator('#box106')
    await rome.dragTo(italy)
    expect(await page.locator('#box6'))
    .toHaveAttribute('style', 'visibility: visible; background-color: rgb(0, 255, 0);')
    await page.waitForTimeout(5000)
})

test.only('Verify the drag&drop using mouse Actions', async ({ page }) => {
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    await page.locator('#box1').hover()
    await page.mouse.down()
    await page.locator('#box101').hover()
    await page.mouse.up()
    expect(await page.locator('#box1'))
    .toHaveAttribute('style', 'visibility: visible; background-color: rgb(0, 255, 0);')
    await page.waitForTimeout(5000)
})