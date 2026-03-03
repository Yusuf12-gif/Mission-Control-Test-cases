import {test, expect} from '@playwright/test';
import { createApiContext } from '../../utils/apiClient';

test('Get Team Attendance Yearly', async()=>{
    const teamId='63c02eba53fe3801ceb68edf6a478496f17d11c3dbc48c3e6f1a0b1890112531'
    const api=await createApiContext();
    const year='2025'
    const response=await api.get(`/api/attendance/aggregation/team/${teamId}/year/${year}`);
    expect(response.status()).toBe(200);
    const body=await response.json();
    console.log(body);
})