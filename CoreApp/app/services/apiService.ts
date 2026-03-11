import axios from "axios";
import { RavenConfigResponse } from "./types";
import { ravenClient } from "../api/ravenClient"

export const getRemoteConfig = async (): Promise<RavenConfigResponse[]> => {
  const response = await ravenClient.get<RavenConfigResponse[]>("/api/configprop/raven-portal/dev/cg?name=raven-portal-mobile-poc-config");
  return response.data;
};