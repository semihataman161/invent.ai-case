import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.get("/users", UserController.getUsers);
router.get("/users/:id", UserController.getUser);
router.post("/users/:userId/borrow/:bookId", UserController.borrowBook);
router.post("/users/:userId/return/:bookId", UserController.returnBook);

export default router;
