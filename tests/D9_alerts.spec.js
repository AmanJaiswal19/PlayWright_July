const { test, expect } = require('@playwright/test')
const exp = require('constants')
const { on } = require('events')

test('Handle js simple alert with playwright', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.on('dialog', async simpleAlert => {
        await expect(simpleAlert.message()).toContain('I am a JS Alert')
        await expect(simpleAlert.type()).toContain('alert')
        await simpleAlert.accept()
    })
    await page.locator('button[onclick="jsAlert()"]').click()
    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert')
})

test('Handle js confirm with playwright', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.on('dialog', async confirmAlert => {
        await expect(confirmAlert.message()).toContain('I am a JS Confirm')
        await expect(confirmAlert.type()).toContain('confirm')
        // confirmAlert.accept()
        confirmAlert.dismiss()
    })
    await page.locator('button[onclick="jsConfirm()"]').click()
    // await expect(page.locator('#result')).toHaveText('You clicked: Ok')
    await expect(page.locator('#result')).toHaveText('You clicked: Cancel')
})

test.only('Handle js prompt with playwright', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.on('dialog', async promptAlert => {
        await expect(promptAlert.message()).toContain('I am a JS prompt')
        await expect(promptAlert.type()).toContain('prompt')
        //promptAlert.accept('Minskole')
        promptAlert.dismiss()
    })
    await page.getByText('Click for JS Prompt').click()
    //await expect(page.locator('#result')).toHaveText('You entered: Minskole')
    await expect(page.locator('#result')).toHaveText('You entered: null')
    await page.waitForTimeout(4000)
})