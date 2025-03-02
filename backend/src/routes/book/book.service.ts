import prisma from "../../models/prismaClient";

export const getAllBooks = async () => {
  return await prisma.book.findMany();
};

export const getBookById = async (id: string) => {
  const book = await prisma.book.findUnique({
    where: { id: Number(id) },
    include: { borrower: true, ratings: true },
  });

  if (!book) throw new Error("Book not available");

  const avgRating =
    book.ratings.length > 0
      ? book.ratings.reduce((sum: any, r: any) => sum + r.score, 0) /
        book.ratings.length
      : null;

  return { ...book, avgRating };
};

export const BookService = {
  getAllBooks,
  getBookById,
};
