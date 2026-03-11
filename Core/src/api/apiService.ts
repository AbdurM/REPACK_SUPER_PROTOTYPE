import axios from "axios";
import { RavenConfigResponse } from "../types/config.types";
import { ravenClient, attachMock } from "./clients/ravenClient"

export const fetchRemoteConfig = async (): Promise<RavenConfigResponse[]> => {
  attachMock();
  const response = await ravenClient.get<RavenConfigResponse[]>("/api/configprop/raven-portal/dev/cg?name=raven-portal-mobile-poc-config");
  return response.data;
};