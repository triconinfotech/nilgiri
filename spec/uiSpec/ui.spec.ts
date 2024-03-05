import { test } from "@playwright/test";
import { uiCommonUtils } from "../../utils/uiCommonMethodModule";
const testSpec = uiCommonUtils.uiBase.applicationHome
import * as testData from "../../resource/uiTestData/uiTestData.json";
const resource: string = "/";


/*
1. Lounch Triconinfotech URL 
2. Validate Menu Items
*/
test('Validate all Menu Items in Home Page', async ({ page, baseURL }) => {
    const url = baseURL + resource
    await testSpec.validateHomePage({ page, url })
    await testSpec.validatemenuItems({ page })
}),
    /*
    1. Lounch Triconinfotech URL 
    2. Validate Contact Us in Last of the page
    */
    test('Validate Contact us in lst of the Hom Page', async ({ page, baseURL }) => {
        const url = baseURL + resource
        await testSpec.validateHomePage({ page, url })
        await testSpec.scrollDownToLastOfPage({ page })
        await testSpec.validateConactUsSection({ page })
    })
    