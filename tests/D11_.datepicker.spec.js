const { test, expect } = require('@playwright/test')

test('verify the datepicker using js object', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/Datepicker/index.htm')
    const date = new date()
    date.setdate(date.getdate() + 256)
    let d = date.getDate(); //Current Date
    //let mnt = date.toLocaleString('default',{month:'short'}) // Cureent month in short string (Apr)
    let mnt = date.toLocaleString("default", { month: "long" }); // Cureent month in full string (April)
    let year = date.getFullYear();
    console.log(d);
    console.log(mnt);
    console.log(year);
    let FutureDate = `${d} ${mnt} ${year}`;
    console.log(FutureDate);
    await page.locator("#datepicker").click();

    while (true) {
        let monthyear = await page
            .locator('[class="datepicker-switch"]')
            .first()
            .textContent();
        if (monthyear === `${mnt} ${year}`) {
            break;
        }
        await page.locator('[class="next"]').first().click();
        // console.log(monthyear)
    }
    const dayCount = await page.locator('[class="day"]').count();
    console.log(dayCount);
    await page.waitForTimeout(4000);
    for (let i = 0; i < dayCount; i++) {
        let text = await page.locator('[class="day"]').nth(i).textContent();
        console.log(text);
        if (text == d) {
            await page.locator('[class="day"]').nth(i).click();
            break;
        }
    }
    await page.waitForTimeout(3000);
})