function parseEnv(content) {
  return content
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0 && !line.startsWith("#"))
    .reduce((acc, line) => {
      const index = line.indexOf("=");
      if (index === -1) {
        return acc;
      }
      const key = line.slice(0, index).trim();
      let value = line.slice(index + 1).trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      acc[key] = value;
      return acc;
    }, {});
}

const fileEnv = parseEnv(open("../../.env"));
const username = fileEnv.USERNAME || fileEnv.GITHUB_USERNAME;
const password = fileEnv.PASSWORD || fileEnv.GITHUB_PASSWORD;

export const ENV = {
  BASE_URL: "https://www.github.com",
  USERNAME: username,
  PASSWORD: password,
};
