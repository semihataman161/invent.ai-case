import { Request, Response, NextFunction } from "express";
import { CustomError } from "../core/errors/CustomError";

const INTERNAL_SERVER_ERROR = 500;

const ErrorHandler = (
  error: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { message, options } = error;
  let status = INTERNAL_SERVER_ERROR;

  if (options?.hasOwnProperty("statusCode")) {
    status = options.statusCode;
  }

  res.status(status).json({ data: {}, message });
  next(error);
};

export { ErrorHandler };
