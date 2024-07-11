const { test, expect } = require('@playwright/test')

test('verify the login functionality with vaild credentials', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
    await page.locator('[id="user-name"]').fill('standard_user')
    await page.locator('[id="password"]').fill('secret_sauce')
    await page.locator('[id="login-button"]').click()
    await expect(page.locator('[class="app_logo"]')).toHaveText('Swag Labs')
    await expect(page.locator('[class="title"]')).toHaveText('Products')
    await expect(page).toHaveTitle('Swag Labs')
    await page.waitForTimeout(4000)
})

test.only('verify the login functionality with invalid credentials', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
    await page.locator('[id="user-name"]').fill('standard_user')
    await page.locator('[id="password"]').fill('@123')
    await page.locator('[id="login-button"]').click()
    await expect(page.locator('h3')).toHaveText('Epic sadface: Username and password do not match any user in this service')
    await page.waitForTimeout(4000)
})