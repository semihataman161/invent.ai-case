import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { UserService } from "./user.service";

export const getUsers = asyncHandler(async (req: Request, res: Response) => {
  const users = await UserService.getAllUsers();
  res.status(200).json(users);
});

export const getUser = asyncHandler(async (req: Request, res: Response) => {
  const user = await UserService.getUserById(req.params.id);
  if (!user) res.status(404).json({ message: "User not found" });
  res.status(200).json(user);
});

export const borrowBook = asyncHandler(async (req: Request, res: Response) => {
  await UserService.borrowBook(req.params.userId, req.params.bookId);
  res.status(200).json({ message: "Book borrowed successfully" });
});

export const returnBook = asyncHandler(async (req: Request, res: Response) => {
  await UserService.returnBook(req.params.userId, req.params.bookId);
  res.status(200).json({ message: "Book returned successfully" });
});

export const UserController = {
  getUsers,
  getUser,
  borrowBook,
  returnBook,
};
