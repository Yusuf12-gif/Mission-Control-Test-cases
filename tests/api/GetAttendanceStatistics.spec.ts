import {test, expect} from '@playwright/test';
import { createApiContext } from '../../utils/apiClient';

test('Get Attendance Statistics', async({request})=>{
    const api = await createApiContext();
    const response=await api.get('/api/attendance/statistics',{
        params:{
            month:'06-2025'
        }
    })
    expect(response.status()).toBe(200);
    const body =await response.json();
    console.log(body);
})