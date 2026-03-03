import axios from "axios";
import { RavenConfigResponse } from "../types/config.types.ts";

const ravenClient = axios.create({
  baseURL: "https://digital-config-api.dev.kea.aws.ssctech.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchRemoteConfig = async (): Promise<RavenConfigResponse[]> => {
  const response = await ravenClient.get<RavenConfigResponse[]>("/api/configprop/raven-portal/dev/cg?name=raven-mobile-poc-config");
  return response.data;
};