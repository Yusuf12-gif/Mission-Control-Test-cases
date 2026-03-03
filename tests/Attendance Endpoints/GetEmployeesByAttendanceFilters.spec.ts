import {test, expect} from '@playwright/test';
import { createApiContext } from '../../utils/apiClient';

test('Get Employees by Attendance Filters', async()=>{
    const api=await createApiContext();
    const month='04-2025';
    const response=await api.get(`/api/attendance/month/${month}`,{
        params:{
            minPresentDays:5,
            minShortageDays:5
        }
    })
    expect(response.status()).toBe(200);
    const body=await response.json();
    console.log(body);
    console.log(body.attendance_records[5].attendance);
})