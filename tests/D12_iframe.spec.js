const { test, expect } = require("@playwright/test");

//1st way by using .framelocator
test('iframe handling', async ({ page }) => {
    await page.goto('https://letcode.in/frame')
    //await page.locator('[name="fname"]').fill('Aman')
    const iframe1 = await page.frameLocator('iframe[src="frameUI"]')
    await iframe1.locator('input[name="fname"]').fill('Aman')
    expect(iframe1.locator('input[name="fname"]')).toBeVisible()
    await page.waitForTimeout(4000)
})

//2nd way by using .frame method name attribute 
test('iframe handeling', async ({ page }) => {
    await page.goto('https://letcode.in/frame')
    //await page.locator('[name="fname"]').fill('Aman')
    const iframe2 = await page.frame('firstFr')
    await iframe2.locator('input[name="fname"]').fill('Aman')
    expect(iframe2.locator('input[name="fname"]')).toBeVisible()
    await page.waitForTimeout(4000)
})

//OR 2nd way by using .frame method by URL
test.only('Handling Iframe with .frame method with URL', async ({ page }) => {
    await page.goto('https://letcode.in/frame')
    const frame3 = await page.frame({ url: 'https://letcode.in/frameUI' })
    await frame3.locator('input[name="fname"]').fill('Aman')
    await frame3.locator('[name="lname"]').fill('Aman')
    expect(frame3.locator('input[name="fname"]')).toBeVisible()
    await page.waitForTimeout(4000)
})