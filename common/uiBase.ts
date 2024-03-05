import nilgiriModule from "nilgirihub";
import { expect, Locator, Page } from "@playwright/test";
import { uiCommonUtils } from "../utils/uiCommonMethodModule";
import { elementFactoryUtils } from "../utils/uiElementFactoryModule";
import * as testData from "../resource/uiTestData/uiTestData.json";
import * as path from "path";

const adminPage = elementFactoryUtils.admin.pageOne;
const homePage = elementFactoryUtils.home.pageTwo;

interface NavigationParams {
  page?: Page;
  url?: string;
}
const applicationHome = {
  async validateHomePage({ page, url }: NavigationParams): Promise<void> {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto(url, { waitUntil: "networkidle", timeout: 10000 });
  },
  async validatemenuItems({ page }: NavigationParams): Promise<void> {
    const menuItems = await this.assertMenu({ page });
    await expect(await page.locator(homePage.homePageMenu)).not.toHaveCount(0);
    for (let i = 0; i <= menuItems.lenght; i++) {
      expect(await menuItems[i].isVisible()).toBeTruthy();
    }
  },
  async assertMenu({ page }: NavigationParams): Promise<Locator> {
    const menuItems = await page.locator(homePage.homePageMenu);
    return menuItems;
  },
  async scrollDownToLastOfPage({ page }: NavigationParams): Promise<void> {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  },
  async validateConactUsSection({ page }: NavigationParams): Promise<void> {
    await page.waitForSelector(homePage.conatactUsPagelast, { state: "visible" });
    const contactUs = await page.locator(homePage.contactUsText).getByText("Contact us");
    expect(contactUs).toBeTruthy();
  }
};
export default { applicationHome };
