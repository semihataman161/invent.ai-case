import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { BookService } from "./book.service";

export const getBooks = asyncHandler(async (req: Request, res: Response) => {
  const books = await BookService.getAllBooks();
  res.status(200).json(books);
});

export const getBook = asyncHandler(async (req: Request, res: Response) => {
  const book = await BookService.getBookById(req.params.id);
  if (!book) res.status(404).json({ error: "Book not found" });
  res.json(book);
});

export const BookController = {
  getBooks,
  getBook,
};
