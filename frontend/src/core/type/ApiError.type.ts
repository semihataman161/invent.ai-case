export type ApiError = {
  key: string;
  message: string;
  detail: unknown;
};

export type ApiReject = {
  success: boolean;
  statusCode: number;
  data: unknown;
  error: ApiError;
};
