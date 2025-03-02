import { Request, Response, NextFunction } from "express";
import { RequestHandler } from "express-serve-static-core";
import { ErrorHandler } from "./ErrorHandler";
import { CustomError } from "../core/errors/CustomError";

const ResponseHandler = (fn: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await fn(req, res, next);
      res.status(200).json({ data });
    } catch (error) {
      ErrorHandler(error as CustomError, req, res, next);
    }
  };
};

export { ResponseHandler };
