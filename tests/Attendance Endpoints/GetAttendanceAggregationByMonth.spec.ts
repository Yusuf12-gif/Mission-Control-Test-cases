import {test, expect} from '@playwright/test';
import { createApiContext } from '../../utils/apiClient';

test('Get Attendance Aggregation By Month', async()=>{
    const api=await createApiContext();
    const month='04-2025';
    const response=await api.get(`/api/attendance/aggregation/month/${month}`);
    expect(response.status()).toBe(200);
    console.log(await response.json());
})