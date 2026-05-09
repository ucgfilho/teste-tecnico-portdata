import http from "k6/http";
import { ENV } from "../config/environment.js";

export function login() {
  return http.post(ENV.BASE_URL, {}, { tags: { name: "login" } });
}