const { test, expect } = require('@playwright/test')

test('Verify keyboard actions in playwright', async ({ page }) => {
    await page.goto('https://gotranscript.com/text-compare')
    //await page.keyboard.down('PageDown')
    await page.locator('textarea[name="text1"]').fill('I am learning Playwright with JavaScript')
    await page.keyboard.press('Control+A')
    //F1 - F12, Digit0- Digit9, KeyA- KeyZ, Backquote, Minus, Equal, Backslash, Backspace, Tab, Delete, 
    //Escape, ArrowDown, End, Enter, Home, Insert, PageDown, PageUp, ArrowRight, ArrowUp
    //Shift, Control, Alt, Meta, ShiftLeft.
    await page.keyboard.press('Control+C')
    // await page.locator('textarea[name="text2"]').click()
    await page.keyboard.down('Tab')
    //await page.keyboard.press('Control+V')
    await page.keyboard.press('Shift+Digit2')
    await page.keyboard.press('Shift+Digit5')
    await page.waitForTimeout(3000)
})