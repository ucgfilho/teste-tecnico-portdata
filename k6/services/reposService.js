import http from "k6/http";
import { ENV } from "../config/environment.js";

export function getRepositories() {
  return http.get(ENV.BASE_URL, { tags: { name: "repositories" } });
}
