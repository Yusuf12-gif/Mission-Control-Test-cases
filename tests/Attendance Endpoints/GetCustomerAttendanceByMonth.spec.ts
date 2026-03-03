import {test, expect} from '@playwright/test';
import { createApiContext } from '../../utils/apiClient';

test('Get Customer Attendance By Month', async()=>{
    const api=await createApiContext();
    const month='04-2025'
    const response=await api.get(`/api/attendance/customers/month/${month}`,{
        params:{
            customerId:'6524b047caaac5473ff2942b5ec7d674c3ff573c162eedad32a960026ffb3d93'
        }
    });
    expect(response.status()).toBe(200);
    const body=await response.json();
    console.log(body);
})