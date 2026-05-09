export const options = {
  vus: 1,
  iterations: 1,
  thresholds: {
    'http_req_duration{ name: "login" }': ["p(95)<2000"],
    'http_req_duration{ name: "repositories" }': ["p(95)<2000"],
    'http_req_duration{ name: "logout" }': ["p(95)<2000"],
  },
};