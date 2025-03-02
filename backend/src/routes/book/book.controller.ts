import { Request, Response } from "express";
import { BookService } from "./book.service";

export const getBooks = async (req: Request, res: Response): Promise<any> => {
  return await BookService.getAllBooks();
};

export const getBook = async (req: Request, res: Response): Promise<any> => {
  return await BookService.getBookById(req.params.id);
};

export const BookController = {
  getBooks,
  getBook,
};
