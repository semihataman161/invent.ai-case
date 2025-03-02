import { AxiosResponse } from "axios";
import { ApiError, ApiData } from "../type";

declare global {
  interface Promise<T> {
    toPromiseArray(): Promise<[Error | null, T | undefined]>;
    toPromiseArrayApi(): T extends AxiosResponse
      ? Promise<
          [
            ApiError | null,
            ApiData<unknown extends T["data"] ? any : T["data"]> | undefined
          ]
        >
      : never;
  }
}

Promise.prototype.toPromiseArray = function () {
  return this.then((data: unknown) => {
    return [null, data];
  }).catch((err: unknown) => {
    return [err, undefined];
  });
};

Promise.prototype.toPromiseArrayApi = function () {
  return this.then((data: any) => {
    return [null, data.data];
  }).catch((err: any) => {
    return [err.error, undefined];
  });
};

export {};
