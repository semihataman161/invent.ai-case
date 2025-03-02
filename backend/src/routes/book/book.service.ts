import { CustomError } from "../../core/errors/CustomError";
import prisma from "../../models/prismaClient";

export const getAllBooks = async () => {
  return await prisma.book.findMany();
};

export const getBookById = async (id: string) => {
  const book = await prisma.book.findUnique({
    where: { id: Number(id) },
  });

  if (!book) throw new CustomError("Book not found", { statusCode: 404 });

  const activeBorrowing = await prisma.borrowing.findFirst({
    where: { bookId: book.id, returnedAt: null },
    include: { user: true },
  });

  const currentBorrower = activeBorrowing ? activeBorrowing.user.name : null;

  const avgRating = await prisma.rating.aggregate({
    _avg: {
      score: true,
    },
    where: {
      bookId: book.id,
    },
  });

  return {
    ...book,
    score: avgRating._avg.score ?? null,
    currentBorrower,
  };
};

export const BookService = {
  getAllBooks,
  getBookById,
};
