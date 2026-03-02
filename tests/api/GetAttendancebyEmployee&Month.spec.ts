import {test, expect} from '@playwright/test';
import { createApiContext } from '../../utils/apiClient';

test('Get Attendance by Employee and Month', async({request})=>{
    const api = await createApiContext();
    const month='04-2025'
    const response=await api.get(`/api/attendance/employee/3022/month/${month}`)
    expect(response.status()).toBe(200);
    const body=await response.json()
    console.log(body);
})