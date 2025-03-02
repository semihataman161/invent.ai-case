import axios, { AxiosRequestConfig as HttpRequestConfig } from "axios";
import { ApiDataConstraint, RequestBody } from "@core/type";
import { toast } from "react-toastify";

const AxiosClient = axios.create({
  timeout: 20000,
});

const errorInterceptor = (error: any) => {
  if (!error.response) {
    toast.error("Network/Server error " + error.response.data.message);
    return Promise.reject(error);
  }

  switch (error.response.status) {
    case 400:
      toast.error("Bad Request: " + error.response.data.message);
      break;
    case 401:
      toast.error(
        "Unauthorized Authentication: " + error.response.data.message
      );
      break;
    case 403:
      toast.error("Forbidden: " + error.response.data.message);
      break;
    case 404:
      toast.error("Not Found: " + error.response.data.message);
      break;
    case 500:
      toast.error("Internal Server Error: " + error.response.data.message);
      break;
    default:
      toast.error("Error: " + error.response.data.message);
  }

  return Promise.reject(error);
};

const responseInterceptor = (response: any) => {
  switch (response.status) {
    case 200:
      break;
    // any other cases
    default:
    // default case
  }

  return response;
};

AxiosClient.interceptors.response.use(responseInterceptor, (error: any) =>
  errorInterceptor(error)
);

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
