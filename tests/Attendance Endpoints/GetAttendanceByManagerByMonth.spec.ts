import {test, expect} from '@playwright/test';
import { createApiContext } from '../../utils/apiClient';

test('Get Attendance By Manager By Month', async()=>{
    const managerId='6'
    const api=await createApiContext();
    const month='05-2025'
    const response=await api.get(`/api/attendance/manager/${managerId}/month/${month}`);
    expect(response.status()).toBe(200);
    const body=await response.json();
    console.log(body);
})