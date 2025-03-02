import { ObjectNs } from "@store/types";

export type ApiDataConstraint =
  | ObjectNs.Any
  | ObjectNs.Any[]
  | boolean
  | number;
export type ApiData<D extends ApiDataConstraint> = D;

export type ApiResponse<D extends ApiDataConstraint> = {
  success: boolean;
  statusCode: number;
  data: ApiData<D>;
  error: unknown;
};
