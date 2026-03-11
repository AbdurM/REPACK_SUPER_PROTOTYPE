import ravenConfig from "./raven/config.json";

export type MockResponse = {
  status: number;
  data: any;
};

export type MockHandler = () => MockResponse;

export const mockRoutes: Record<string, MockHandler> = {
  "/api/configprop/raven-portal/dev/cg?name=raven-portal-mobile-poc-config": () => ({
    status: 200,
    data: ravenConfig,
  }),
};