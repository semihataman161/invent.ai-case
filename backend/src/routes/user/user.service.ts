import { CustomError } from "../../core/errors/CustomError";
import prisma from "../../models/prismaClient";

export const getAllUsers = async () => {
  return await prisma.user.findMany();
};

export const getUserById = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
    include: { borrowedBooks: { include: { book: true } } },
  });

  if (!user) throw new CustomError("User not found", { statusCode: 404 });

  return user;
};

export const borrowBook = async (userId: string, bookId: string) => {
  const book = await prisma.book.findUnique({ where: { id: Number(bookId) } });
  if (!book || book.borrowerId)
    throw new CustomError("Book not available", { statusCode: 404 });

  await prisma.book.update({
    where: { id: Number(bookId) },
    data: { borrowerId: Number(userId) },
  });
  await prisma.borrowedBook.create({
    data: { userId: Number(userId), bookId: Number(bookId) },
  });
};

export const returnBook = async (userId: string, bookId: string) => {
  const book = await prisma.book.findUnique({ where: { id: Number(bookId) } });

  if (!book || book.borrowerId !== Number(userId))
    throw new CustomError("Invalid return request", { statusCode: 400 });

  await prisma.book.update({
    where: { id: Number(bookId) },
    data: { borrowerId: null },
  });
};

export const UserService = {
  getAllUsers,
  getUserById,
  borrowBook,
  returnBook,
};
