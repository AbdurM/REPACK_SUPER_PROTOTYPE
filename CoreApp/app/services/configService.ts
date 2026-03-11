import axios from "axios";
import { RavenConfigResponse } from "./types";
import { attachMockInterceptor } from "../mocks/mockInterceptor";
import { ravenClient, isUsingMock } from "../api/ravenClient";
import { getRemoteConfig } from "./apiService";

export const loadRemoteConfig = async () => {
  if (isUsingMock()) {
    attachMockInterceptor(ravenClient);
  }  
  try {
    const response = await getRemoteConfig();
    if (!Array.isArray(response) || response.length === 0) {
      throw new Error("Response is not an array or is empty");
    }
    if (isUsingMock()) {
      return response[0].value;
    } else {
      return JSON.parse(response[0].value); // value from Raven is stringified, local mock is not.
    }
  } catch (error: any) {
    console.log("Failed to parse JSON from Raven.", error);
    return null;
  }
};
