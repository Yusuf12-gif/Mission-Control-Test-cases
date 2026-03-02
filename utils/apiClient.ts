import { request } from '@playwright/test';
import { AUTH_TOKEN } from './token';

export async function createApiContext() {
  return await request.newContext({
    baseURL: 'https://172.16.19.90',
    ignoreHTTPSErrors: true,
    extraHTTPHeaders: {
      Authorization: `Bearer ${AUTH_TOKEN}`,
      Accept: 'application/json'
    }
  });
}