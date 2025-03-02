import { Request, Response } from "express";
import { UserService } from "./user.service";

export const getUsers = async (req: Request, res: Response): Promise<any> => {
  return await UserService.getAllUsers();
};

export const getUser = async (req: Request, res: Response): Promise<any> => {
  return await UserService.getUserById(req.params.id);
};

export const borrowBook = async (req: Request, res: Response): Promise<any> => {
  await UserService.borrowBook(req.params.userId, req.params.bookId);
  return { message: "Book borrowed successfully" };
};

export const returnBook = async (req: Request, res: Response): Promise<any> => {
  await UserService.returnBook(
    req.params.userId,
    req.params.bookId,
    req.body.score
  );
  return { message: "Book returned successfully" };
};

export const UserController = {
  getUsers,
  getUser,
  borrowBook,
  returnBook,
};
