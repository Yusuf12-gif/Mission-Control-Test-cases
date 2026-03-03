import { request } from '@playwright/test';
import { AUTH_TOKEN } from './token';

export async function createApiContext() {
  return await request.newContext({
    baseURL: 'https://172.16.19.90',
    extraHTTPHeaders: {
      Authorization: `Bearer ${AUTH_TOKEN}`,
      Accept: 'application/json'
    }
  });
}

// Create a file named token.ts inside utils folder and paste your bearer token in the format
// export const AUTH_TOKEN= 'Your Bearer Token'