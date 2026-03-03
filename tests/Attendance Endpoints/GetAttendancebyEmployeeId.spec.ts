import {test, expect} from '@playwright/test';
import { createApiContext } from '../../utils/apiClient';

test('Get Attendance by Employee Id', async()=>{
    const api = await createApiContext();
    const employeeId=3022;
    const year=2025
    const response =await api.get(`/api/attendance/employee/${employeeId}/year/${year}`)
    expect(response.status()).toBe(200);
    const body=await response.json();
    console.log(body.attendanceRecords[0].attendance);
    console.log(body);
})
