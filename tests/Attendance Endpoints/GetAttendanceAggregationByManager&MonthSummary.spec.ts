import {test, expect} from '@playwright/test';
import { createApiContext } from '../../utils/apiClient';

test('Get Attendance Aggregation By Manager & Month', async()=>{
    const api=await createApiContext();
    const month='04-2025';
    const response=await api.get(`/api/attendance/aggregation/manager/month/${month}/summary`);
    expect(response.status()).toBe(200);
    console.log(await response.json());
})