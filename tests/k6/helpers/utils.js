import http from 'k6/http';
import { check } from 'k6';

export function getAndCheck(url, params = {}, expectedStatus = 200) {
  const res = http.get(url, params);
  check(res, {
    [`status é ${expectedStatus}`]: (r) => r.status === expectedStatus,
    'tempo de resposta < 500ms': (r) => r.timings.duration < 500,
  });
  return res;
}

export function postJsonAndCheck(url, payload, params = {}, expectedStatus = 200) {
  const defaultHeaders = { 'Content-Type': 'application/json' };
  const mergedParams = {
    ...params,
    headers: { ...defaultHeaders, ...(params.headers || {}) },
  };
  const res = http.post(url, JSON.stringify(payload), mergedParams);
  check(res, {
    [`status é ${expectedStatus}`]: (r) => r.status === expectedStatus,
    'resposta contém body': (r) => r.body && r.body.length > 0,
  });
  return res;
}

export function authHeaders(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github.v3+json',
    },
  };
}
