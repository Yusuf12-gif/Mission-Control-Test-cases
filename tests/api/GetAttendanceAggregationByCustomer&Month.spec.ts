import {test, expect} from '@playwright/test';
import { createApiContext } from '../../utils/apiClient';

test('Get Attendance Aggregation By Customer and Year', async()=>{
    const api=await createApiContext();
    const customerID='6524b047caaac5473ff2942b5ec7d674c3ff573c162eedad32a960026ffb3d93'
    const month='04-2025';
    const response=await api.get(`/api/attendance/aggregation/customer/${customerID}/month/${month}`);
    expect(response.status()).toBe(200);
    const body=await response.json();
    console.log(body);
    // console.log(body.attendance_record[4].attendance);
})