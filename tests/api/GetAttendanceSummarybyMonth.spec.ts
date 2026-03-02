import { test, expect } from '@playwright/test';
import { createApiContext } from '../../utils/apiClient';

test('Attendance Summary', async ({ request }) => {
  const api = await createApiContext();
  const month='05-2025'
  const response = await api.get(`/api/attendance/summary/month/${month}`);
  console.log("Status:", response.status());
  console.log("Content-Type:", response.headers()['content-type']);
  console.log(await response.json());

  expect(response.status()).toBe(200);
});