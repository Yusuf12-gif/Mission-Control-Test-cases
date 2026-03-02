import {test, expect} from '@playwright/test';
import { createApiContext } from '../../utils/apiClient';

test('Get Attendance by Employee Id', async({request})=>{
    const api = await createApiContext();
    const employeeId=3022;
    const year=2025
    const response =await api.get(`https://172.16.19.90/api/attendance/employee/${employeeId}/year/${year}`)
    expect(response.status()).toBe(200);
    const body=await response.json();
    console.log(body.attendanceRecords[0].attendance);
    console.log(body);
})
