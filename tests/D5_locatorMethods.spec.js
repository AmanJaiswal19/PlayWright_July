const { test, expect } = require('@playwright/test')

// getByAltText
// getByLabel
// getByPlaceholder
// getByRole
// getByTestId
// getByText
// getByTitle
// locator

test('By using getByAltText method in playwright', async ({ page }) => {
    await page.goto('https://letcode.in/test#google_vignette')
    await page.getByAltText('letcode')
    await expect(page.getByAltText('letcode')).toBeVisible()
    // OR
    let el = await page.getByAltText('letcode')
    await expect(el).toBeVisible()
})

test('By using getByLable method in playwright', async ({ page }) => {
    await page.goto('https://letcode.in/test#google_vignette')
    await page.getByLabel('main navigation')
    await expect(page.getByLabel('main navigation')).toBeVisible()
    // OR
    let el2 = await page.getByLabel('Advertisement').first()
    await expect(el2).toBeVisible()
})

test('By using getByPlaceholder method in playwright', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    await page.getByPlaceholder('First Name').fill('Aman')
    await page.waitForTimeout(4000)
})

test('By using getByRole method in playwright', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    await page.getByRole('checkbox', { name: "Option 1" }).check()
    await page.waitForTimeout(4000)
})

test('By using getByText method in playwright', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    let el3 = await page.getByText('WebdriverUniversity.com (Dropdown Menu(s), Checkboxe(s), Radio Button(s))')
    await expect(el3).toBeVisible()
})

test('By using getByTitle method in playwright', async ({ page }) => {
    await page.goto('https://letcode.in/radio')
    let el4 = await page.getByTitle('Koushik Chatterjee')
    await expect(el4).toHaveText('Koushik Chatterjee')
    await expect(el4).toBeVisible()
})

test('By using getByTitle', async ({ page }) => {
    await page.goto('https://letcode.in/radio')
    let ele5 = await page.getByTitle('Advertisement').first()
    await expect(ele5).toBeVisible()
})

test('By using getByTestId methodin playwright', async ({ page }) => {
    await page.goto('https://www.atlassian.com/')
    await page.getByTestId('global-nav-search-icon').click()
    await expect(page.locator('#global-nav-search-input')).toBeVisible()
    await page.waitForTimeout(5000)
})




