import prisma from "../../models/prismaClient";

export const getAllUsers = async () => {
  return await prisma.user.findMany();
};

export const getUserById = async (id: string) => {
  return await prisma.user.findUnique({
    where: { id: Number(id) },
    include: { borrowedBooks: { include: { book: true } } },
  });
};

export const borrowBook = async (userId: string, bookId: string) => {
  const book = await prisma.book.findUnique({ where: { id: Number(bookId) } });
  if (!book || book.borrowerId) throw new Error("Book not available");

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
    throw new Error("Invalid return request");

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
