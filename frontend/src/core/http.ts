import axios, { AxiosRequestConfig as HttpRequestConfig } from "axios";
import { ApiDataConstraint, RequestBody } from "@core/type";

const AxiosClient = axios.create({
  timeout: 20000,
});

class Http {
  client = AxiosClient;

  get = <T extends ApiDataConstraint>(
    url: string,
    config?: HttpRequestConfig
  ) => {
    return this.client.get<T>(url, config);
  };

  post = <T extends ApiDataConstraint>(
    url: string,
    body?: RequestBody,
    config?: HttpRequestConfig
  ) => {
    return this.client.post<T>(url, body, config);
  };

  put = <T extends ApiDataConstraint>(
    url: string,
    body?: RequestBody,
    config?: HttpRequestConfig
  ) => {
    return this.client.put<T>(url, body, config);
  };

  patch = <T extends ApiDataConstraint>(
    url: string,
    body?: RequestBody,
    config?: HttpRequestConfig
  ) => {
    return this.client.patch<T>(url, body, config);
  };

  delete = <T extends ApiDataConstraint>(
    url: string,
    config?: HttpRequestConfig
  ) => {
    return this.client.delete<T>(url, config);
  };
}

const http = new Http();
export default http;
export type { HttpRequestConfig };
