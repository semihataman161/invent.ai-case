import express from "express";
import { UserController } from "./user.controller";
import { ResponseHandler } from "../../middleware/ResponseHandler";

const router = express.Router();

router.get("/users", ResponseHandler(UserController.getUsers));
router.get("/users/:id", ResponseHandler(UserController.getUser));
router.post("/users/:userId/borrow/:bookId", ResponseHandler(UserController.borrowBook));
router.post("/users/:userId/return/:bookId", ResponseHandler(UserController.returnBook));

export default router;
