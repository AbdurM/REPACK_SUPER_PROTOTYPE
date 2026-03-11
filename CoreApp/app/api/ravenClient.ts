import axios from "axios";

/*** Get config from the mock or Raven by setting the ravenBaseUrl below. ***/
export const ravenBaseUrl = "https://digital-config-api.dev.kea.aws.ssctech.com";
// export const ravenBaseUrl = "/mock"

export const ravenClient = axios.create({
    baseURL: ravenBaseUrl,
    timeout: 10000,
    headers: {"Content-Type": "application/json"},
});

export const isUsingMock = () => {
  return ravenBaseUrl === "/mock";
}

