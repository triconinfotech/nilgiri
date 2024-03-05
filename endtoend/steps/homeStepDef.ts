
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
    
    