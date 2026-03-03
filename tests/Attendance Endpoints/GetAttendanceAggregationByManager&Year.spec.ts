import {test, expect} from '@playwright/test';
import { createApiContext } from '../../utils/apiClient';

test('Get Attendance Aggregation By Manager & Year', async()=>{
    const api=await createApiContext();
    const managerId=2;
    const year=2025;
    const response=await api.get(`/api/attendance/aggregation/manager/${managerId}/year/${year}`);
    expect(response.status()).toBe(404);
    console.log(await response.json());
})