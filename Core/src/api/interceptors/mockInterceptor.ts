import { AxiosInstance, AxiosRequestConfig } from "axios";
import { mockRoutes } from "../../mocks/mock";

export function attachMockInterceptor(api: AxiosInstance) {
  api.interceptors.request.use((config: AxiosRequestConfig) => {
    const url = config.url ?? "";

    const handler = mockRoutes[url];

    if (!handler) {
      return config;
    }

    config.adapter = async () => {
      const { status, data } = handler();
      return {
        data,
        status,
        // statusText: "OK",
        // headers: {},
        // config,
      };
    };

    return config;
  });
}