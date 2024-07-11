const { test, expect } = require('@playwright/test')

test('verify the login funcitonality with valid credintials', async ({ page }) => {
    //AAA
    //Arrang
    //Action 
    //Assertion

    //Step 1 Navigate to the URL
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //step 2 Enter UserName & Password
    await page.locator('[name="username"]').fill('Admin')
    await page.locator('[name="password"]').fill('admin123')
    //Step 3 Click on login button
    await page.locator('[type="submit"]').click()
    //Step 4 Validation 
    await expect(page.locator('.oxd-topbar-header-breadcrumb-module')).toHaveText('Dashboard')
    await expect(page).toHaveTitle('OrangeHRM')
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    await page.waitForTimeout(4000)
})

test.only('verify the login functionality with invalid credintials', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('[name="username"]').fill('admin')
    await page.locator('[name="password"]').fill('admin1234')
    await page.locator('[type="submit"]').click()
    await expect(page.locator('.oxd-alert-content-text')).toBeVisible()
    await expect(page.locator('.oxd-alert-content-text')).toHaveText('Invalid credentials')
    await expect(page.locator('.orangehrm-login-forgot-header')).toBeVisible()
    await expect(page.locator('.orangehrm-login-forgot-header')).toHaveText('Forgot your password?')
    await page.waitForTimeout(4000)
})