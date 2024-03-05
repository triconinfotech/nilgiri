
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
    
    