import {test, expect} from '@playwright/test';
import { createApiContext } from '../../utils/apiClient';

test('Get Attendance Aggregation By Manager', async()=>{
    const api=await createApiContext();
    const managerId=1;
    const response=await api.get(`/api/attendance/aggregation/manager/${managerId}`);
    expect(response.status()).toBe(404);
    console.log(await response.json());
})