import express from "express";
import { BookController } from "./book.controller";

const router = express.Router();

router.get("/books", BookController.getBooks);
router.get("/books/:id", BookController.getBook);

export default router;
