import { test } from '@playwright/test';
    import { uiCommonUtils } from '../../utils/uiCommonMethodModule'
    import * as testData from "../../resource/apiTestData/apiTestData.json";
    const testSpec = uiCommonUtils.apiBase.apiBase
    
    //Post call validatio and assertion 
    test('POST_API_Validation', async ({ }) => {
      const loginMethod = 'POST';
      const loginEndPoint = testData.postAPIUrl;
      const loginPayload = testData.postAPIPayload;
    
      await testSpec.validatePOSTCall
        ({
          method: loginMethod,
          endPoint: loginEndPoint,
          payload: loginPayload
        })
    });
    
    
    //Get call validation and Iterate through the "data" array
    test('GET_API_Validation', async ({ }) => {
      const loginMethod = 'GET';
      const loginEndPoint = testData.getAPIUrl;
      await testSpec.validateGETCall({ method: loginMethod,endPoint: loginEndPoint, })
    });
    test('Generate Token and GET Profile Details', async ({ }) => {
      // First API call to get the token
      const loginMethod = 'POST';
      const loginEndPoint = testData.tokenUrl;
      const loginPayload = testData.tokenPayload;
    
      const token = await testSpec.tokenAPI({
        method: loginMethod,
        endPoint: loginEndPoint,
        payload: loginPayload
      });
    
      // Second API call using the token
      const anotherMethod = 'GET';
      const anotherEndPoint = testData.getUserProfileUrl;
      const anotherPayload = {}; // Payload for the second call, if needed
      const OtherHeaders = {
        'Authorization': 'Bearer '+token
      }
    
      await testSpec.getUserDetails({
        method: anotherMethod,
        endPoint: anotherEndPoint,
        payload: anotherPayload,
        headers : OtherHeaders  // Use the token obtained from the first call
      });
    });
    
    
    