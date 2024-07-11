const { test, expect } = require("@playwright/test");
const data = require('../tests/testData/contactUsData.json')
const {customTest} = require('../tests/testData/customData')

test('Verify contactUs form using fixture data', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    await page.locator('[name="first_name"]').fill(data.firstName)
    await page.locator('[name="last_name"]').fill(data.lastName)
    await page.locator('[name="email"]').fill(data.email)
    await page.locator('[name="message"]').fill(data.msg)
    await page.locator('[type="submit"]').click()
    await expect(page.locator('h1')).toHaveText('Thank You for your Message!')
})

data.forEach(el => {
    test(`Verify contactUs form using multiple fixture data ${el.firstName}`, async ({ page }) => {
        await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
        await page.locator('[name="first_name"]').fill(el.firstName)
        await page.locator('[name="last_name"]').fill(el.lastName)
        await page.locator('[name="email"]').fill(el.email)
        await page.locator('[name="message"]').fill(el.msg)
        await page.locator('[type="submit"]').click()
        await expect(page.locator('h1')).toHaveText('Thank You for your Message!')
    })
})

customTest.only('Verify contactUs form usingjs file data', async ({ page, testdataForContactUs }) => {
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    await page.locator('[name="first_name"]').fill(testdataForContactUs.firstName)
    await page.locator('[name="last_name"]').fill(testdataForContactUs.lastName)
    await page.locator('[name="email"]').fill(testdataForContactUs.email)
    await page.locator('[name="message"]').fill(testdataForContactUs.msg)
    await page.locator('[type="submit"]').click()
    await expect(page.locator('h1')).toHaveText('Thank You for your Message!')
})

