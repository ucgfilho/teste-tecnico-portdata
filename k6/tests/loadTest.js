import { group, sleep } from "k6";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { assertLogin, assertLogout, assertRepositories } from "../checks/assertions.js";
import { options as k6Options } from "../config/options.js";
import { login } from "../services/loginService.js";
import { logout } from "../services/logoutService.js";
import { getRepositories } from "../services/reposService.js";

export const options = k6Options;

export default function loadTest() {
  group("login", () => {
    const response = login();
    assertLogin(response);
  });
  sleep(1);
  group("repositories", () => {
    const response = getRepositories();
    assertRepositories(response);
  });
  sleep(1);
  group("logout", () => {
    const response = logout();
    assertLogout(response);
  });
}

export function handleSummary(data) {
  return {
    "k6/report/resultado.html": htmlReport(data),
  };
}
