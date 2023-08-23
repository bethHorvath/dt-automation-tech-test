const {test, expect } = require('@playwright/test');

const skyUrl = 'https://sky.com';
const cookiesIframe = '#notice';
const acceptCta = "text=Accept all";
const navList = '[data-test-id="primary-nav-list"]';
const dealsUrl = 'https://www.sky.com/deals';



test.describe("This feature will make sure that the shop page is navigable and usable", async() => {
    test('Navigate to Deals Page', async({page}) => {
        await page.goto(skyUrl, {waitUntil: "domcontentloaded"});
        await page.frameLocator(cookiesIframe).locator(acceptCta).click;
        const navListContainer = page.locator('[data-test-id="primary-nav-list"]');
        // await page.locator('[data-test-id="primary-nav-list"] >> text="Deals"').click();
        await navListContainer.getByText('Deals').click();
        await expect(page.url()).toEqual(dealsUrl, 'deal url does not match');
    })
})

