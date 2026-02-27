import {test, expect} from '@playwright/test';

test('Get all Touchpoints', async({request})=>{
    const response=await request.get('https://172.16.19.90/api/touchpoints')
    expect(response.status()).toBe(200);
    const body=await response.json();
    console.log(body);
})