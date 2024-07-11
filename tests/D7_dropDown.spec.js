//Static dropdown
//dynamic dropdown

const { test, expect } = require('@playwright/test')

test('verify the static dropdown in playwight', async ({ page }) => {
    await page.goto('https://letcode.in/dropdowns')
    await page.locator('#fruits').selectOption('2')
    await expect(page.locator('p[class="subtitle"]')).toBeVisible()
    await expect(page.locator('p[class="subtitle"]')).toHaveText('You have selected Orange')

    await page.locator('#superheros').selectOption('bt')
    await expect(page.locator('[class="subtitle"]').last()).toBeVisible()
    await expect(page.locator('[class="subtitle"]').last()).toHaveText('You have selected Batman')
})

//dynyamic dropdown
test('verify the dynamic dropdown', async ({ page }) => {
    await page.goto('https://www.redbus.in/')
    await page.locator('#src').fill('Mumbai', { delay: 2000 })
    await page.waitForSelector('.placeHolderMainText')
    let optcount = await page.locator('.placeHolderMainText').count()
    for (let i = 0; i < optcount; i++) {
        let text = await page.locator('.placeHolderMainText').nth(i).textContent()
        if (text === 'Nagpur') {
            await page.locator('.placeHolderMainText').nth(i).click()
            break
        }
    }
    await page.waitForTimeout(5000)
})

test.only('verify the dynyamic dropdown', async ({ page }) => {
    await page.goto('https://www.redbus.in/')
    await page.locator('#dest').fill('Pune', { delay: 2000 })
    await page.waitForSelector('.placeHolderMainText')
    let result = await page.locator('.placeHolderMainText').count()
    for (let i = 0; i < result; i++) {
        let text = await page.locator('.placeHolderMainText').nth(i).textContent()
        if (text === 'Delhi') {
            await page.locator('.placeHolderMainText').nth(i).click()
            break
        }
    }
    await page.waitForTimeout(5000)
    let assert = await page.locator('text[class="placeHolderMainText"]')
    await expect(assert).toHaveText('Delhi')
})

