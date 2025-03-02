import express from "express";
import { BookController } from "./book.controller";
import { ResponseHandler } from "../../middleware/ResponseHandler";

const router = express.Router();

router.get("/books", ResponseHandler(BookController.getBooks));
router.get("/books/:id", ResponseHandler(BookController.getBook));

export default router;
