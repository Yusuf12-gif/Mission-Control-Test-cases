import {test, expect} from '@playwright/test';
import { createApiContext } from '../../utils/apiClient';

test('Get all Employees with Events', async () => {
  const api = await createApiContext();
  const response = await api.get('/api/employees',{
    params:{
      employee_id:'3022'
    }
  });
  expect(response.status()).toBe(200);

  const body = await response.json();
  // console.log(body)
  // console.log(Object.keys(body));
  console.log(body.employees[0].experience)
});
