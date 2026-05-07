export const baseOptions = {
  thresholds: {
    http_req_duration: ['p(95)<500'],
    http_req_failed: ['rate<0.01'],
  },
  tags: {
    project: 'portdata-qa',
    env: __ENV.ENVIRONMENT || 'staging',
  },
};
