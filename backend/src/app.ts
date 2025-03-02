import express from "express";
import cors from "cors";
import UserRoutes from "./routes/user/user.route";
import BookRoutes from "./routes/book/book.route";

const app = express();

app.use(cors());
app.use(express.json());
app.use(UserRoutes);
app.use(BookRoutes);

export default app;
