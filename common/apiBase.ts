import nilgiriModule from "nilgirihub";
import { expect } from "@playwright/test";

interface CallNilgiriAPIParams {
    method: 'GET' | 'POST' | 'PUT'; // Add other HTTP methods as needed
    endPoint: string;
    payload?: any; // Optional since not all requests will have a payload
    headers?: Record<string, string>;
}
const apiBase = {

    async apiPOSTCall({ method, endPoint, payload }): Promise<void> {
        const response = await nilgiriModule.apiRequest(method, endPoint, payload);
        return response
    },
    async validatePOSTCall({ method, endPoint, payload  }): Promise<void> { 
        await this.assertation({method, endPoint, payload })
    },
    async assertation({ method, endPoint, payload  }): Promise<void> {
        const response = await this.apiPOSTCall({method, endPoint, payload })
        // console.log(await response.body);
        console.log("Status Code ",response.status);
        expect(response.status).toEqual(201);
        // console.log('FETCHING ID : ' + response.body.id);
        expect(response.body.id).not.toBeNull();
        expect(response.body.name).toEqual('SWAT_TEAM');
        expect(response.body.job).not.toBeNull();
        expect(response.body.createdAt).not.toBeNull();
    },
    async validateGETCall({ method, endPoint }): Promise<void> {
        const response = await this.apiPOSTCall({method, endPoint })
        expect(response.status).toEqual(200);
        console.log("Status Code ",response.status);
        // Iterate through the "data" array in the JSON object
        for (const item of response.body.data) {
            expect(item.id).not.toBeNull();
            expect(item.name).not.toBeNull();
        }
    },
    async tokenAPI({ method, endPoint, payload }: CallNilgiriAPIParams): Promise<string> {
        const response = await nilgiriModule.apiRequest(method, endPoint, payload);
        const token: string = response.body.access_token;
        console.log("Token ",token)
        return token
    },
    async getUserDetails({ method, endPoint, payload ,headers}: CallNilgiriAPIParams): Promise<void> {
        const response = await nilgiriModule.apiRequest(method, endPoint, payload,headers);
        console.log("Status Code ", response.status);
        expect(response.body.email).toEqual("john@mail.com")
    }



}
export default { apiBase }




