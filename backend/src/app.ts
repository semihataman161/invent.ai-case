import express from "express";
import UserRoutes from "./routes/user/user.route";
import BookRoutes from "./routes/book/book.route";

const app = express();

app.use(express.json());
app.use(UserRoutes);
app.use(BookRoutes);

export default app;
