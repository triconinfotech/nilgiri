const featureScript = 
    `
    Feature: Tricon Infotech Website Navigation

    Scenario: Validate visibility of all menu items
      Given I am on the Tricon Infotech homepage
      Then I should see all menu items
  
    Scenario: Validate visibility of the Contact Us section
      Given I am on the Tricon Infotech homepage
      When I scroll to the bottom of the page
      Then I should see the Contact Us section
    `
const stepDefinationScript =
    `
    import { Given, When, Then } from '@cucumber/cucumber';
    import { chromium, Browser, Page, expect } from '@playwright/test';
    import { uiCommonUtils } from "../../utils/uiCommonMethodModule";
    const testSpec = uiCommonUtils.uiBase.applicationHome
    
    
    let url = "https://www.triconinfotech.com/"
    Given('I am on the Tricon Infotech homepage', async function () {
      await testSpec.validateHomePage({page: this.page, url})
    });
    
    Then('I should see all menu items', async function () {
      await testSpec.validatemenuItems({page:this.page})
    });
    
    When('I scroll to the bottom of the page', async function () {
      await testSpec.scrollDownToLastOfPage({page:this.page})
    });
    
    Then('I should see the Contact Us section', async function () {
      await testSpec.validateConactUsSection({page:this.page})
    });
    
    `
const hookScript = 
    `
    import { setWorldConstructor, Before, After } from '@cucumber/cucumber';
    import { chromium, Browser, Page } from '@playwright/test';
    
    class CustomWorld {
        browser: Browser | null;
        page: Page | null;
    
        constructor() {
            this.browser = null;
            this.page = null;
        }
    }
    
    setWorldConstructor(CustomWorld);
    
    Before(async function () {
        this.browser = await chromium.launch({
            headless: false // Set to false to run in headed mode
        });
        
        const context = await this.browser.newContext({ timeout: 10000 });
        this.page = await context.newPage();
    });
    
    After(async function () {
        await this.page.close();
        await this.browser.close();
        console.log("test is Passing")
    });
    
    `

module.exports = {
    featureScript,
    stepDefinationScript,
    hookScript
}