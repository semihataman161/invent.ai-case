import express from "express";
import userRoutes from "./routes/user/user.route";
import bookRoutes from "./routes/book/book.route";
import { errorResponder } from "./middleware/errorMiddleware";

const app = express();

app.use(express.json());
app.use(userRoutes);
app.use(bookRoutes);
app.use(errorResponder);

export default app;
