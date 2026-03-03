import {test, expect} from '@playwright/test';
import { createApiContext } from '../../utils/apiClient';

test('Get all Teams', async()=>{
    const api= await createApiContext();
    const response=await api.get('/api/team/with-events')
    expect(response.status()).toBe(200);
    const body=await response.json();
    console.log(body);
})
