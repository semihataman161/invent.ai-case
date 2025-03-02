import { CustomError } from "../../core/errors/CustomError";
import prisma from "../../models/prismaClient";

export const getAllUsers = async () => {
  return await prisma.user.findMany();
};

export const getUserById = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
  });

  if (!user) throw new CustomError("User not found", { statusCode: 404 });

  const borrowings = await prisma.borrowing.findMany({
    where: { userId: user.id },
    include: {
      book: true,
    },
  });

  const ratings = await prisma.rating.findMany({
    where: { userId: user.id },
  });

  const pastBooks = borrowings
    .filter((borrowing: any) => borrowing.returnedAt !== null)
    .map((borrowing: any) => ({
      id: borrowing.book.id,
      name: borrowing.book.name,
      userScore:
        ratings.find((rating: any) => rating.bookId === borrowing.bookId)
          ?.score ?? null,
    }));

  const presentBooks = borrowings
    .filter((borrowing: any) => borrowing.returnedAt === null)
    .map((borrowing: any) => ({
      id: borrowing.book.id,
      name: borrowing.book.name,
    }));

  return {
    id: user.id,
    name: user.name,
    books: {
      past: pastBooks,
      present: presentBooks,
    },
  };
};

export const borrowBook = async (userId: string, bookId: string) => {
  const book = await prisma.book.findUnique({
    where: { id: Number(bookId) },
  });

  if (!book) throw new CustomError("Book not found", { statusCode: 404 });

  const existingBorrowing = await prisma.borrowing.findFirst({
    where: { bookId: Number(bookId), returnedAt: null },
  });

  if (existingBorrowing)
    throw new CustomError("Book is currently borrowed", { statusCode: 400 });

  await prisma.borrowing.create({
    data: {
      userId: Number(userId),
      bookId: Number(bookId),
      borrowedAt: new Date(),
    },
  });
};

export const returnBook = async (
  userId: string,
  bookId: string,
  score: number
) => {
  console.log(userId, bookId, score);
  const borrowing = await prisma.borrowing.findFirst({
    where: {
      userId: Number(userId),
      bookId: Number(bookId),
      returnedAt: null,
    },
  });

  if (!borrowing)
    throw new CustomError("The book has not been borrowed by this user", {
      statusCode: 400,
    });

  await prisma.borrowing.update({
    where: { id: borrowing.id },
    data: { returnedAt: new Date() },
  });

  const existingRating = await prisma.rating.findFirst({
    where: {
      userId: Number(userId),
      bookId: Number(bookId),
    },
  });

  console.log("exc: ", existingRating);
  if (!existingRating) {
    await prisma.rating.create({
      data: {
        userId: Number(userId),
        bookId: Number(bookId),
        score,
      },
    });
  }
};

export const UserService = {
  getAllUsers,
  getUserById,
  borrowBook,
  returnBook,
};
