import { check } from "k6";
import { Trend } from "k6/metrics";

const loginDuration = new Trend("login_duration", true);
const repositoriesDuration = new Trend("repositories_duration", true);
const logoutDuration = new Trend("logout_duration", true);

export function assertLogin(response) {
  loginDuration.add(response.timings.duration);
  console.log(`(login) duração: ${response.timings.duration}ms`);
  check(response, {
    "(login) status: 200": (r) => r.status === 200,
  });
}

export function assertRepositories(response) {
  repositoriesDuration.add(response.timings.duration);
  console.log(`(repositories) duração: ${response.timings.duration}ms`);
  check(response, {
    "(repositories) status: 200": (r) => r.status === 200,
  });
}

export function assertLogout(response) {
  logoutDuration.add(response.timings.duration);
  console.log(`(logout) duração: ${response.timings.duration}ms`);
  check(response, {
    "(logout) status: 200": (r) => r.status === 200,
  });
}
