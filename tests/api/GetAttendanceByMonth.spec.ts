import {test, expect} from '@playwright/test';
import { createApiContext } from '../../utils/apiClient';

test('Get Attendance by Month', async({request})=>{
    const api = await createApiContext();
    const month='04-2025'
    const response=await api.get(`/api/attendance/month/${month}`)
    expect(response.status()).toBe(200);
    const body=await response.json();
    console.log(body);
    console.log(body.attendance_records[0].employeeName);
    console.log(body.attendance_records[0].attendance);

})