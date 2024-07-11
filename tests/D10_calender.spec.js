const { test, expect } = require('@playwright/test')

test('Verify datepicker in Playwright', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#datepicker').fill('17/04/2024')
    await page.waitForTimeout(6000)
})

test.only("Handling Datepicker using playwright", async ({ page }) => {
    await page.goto("https://www.webdriveruniversity.com/Datepicker/index.html");
    const year = "2025";
    const month = "June";
    const day = "14";
    await page.locator("#datepicker").click();
    console.log(`${month} ${year}`);

    while (true) {
        let monthyear = await page
            .locator('[class="datepicker-switch"]')
            .first()
            .textContent();
        if (monthyear === `${month} ${year}`) {
            break;
        }
        await page.locator('[class="next"]').first().click();
        // console.log(monthyear)
    }
    await page.waitForTimeout(4000);
    // await page.locator('[class="today day"]').click()
    // await page.waitForTimeout(4000)
    const dayCount = await page.locator('[class="day"]').count();
    console.log(dayCount);
    await page.waitForTimeout(4000);
    for (let i = 0; i < dayCount; i++) {
        let text = await page.locator('[class="day"]').nth(i).textContent();
        console.log(text)
        if (text == day) {
            await page.locator('[class="day"]').nth(i).click()
            break
        }
    }
    await page.waitForTimeout(3000)
});