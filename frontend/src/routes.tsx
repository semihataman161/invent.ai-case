import { Routes, Route } from "react-router-dom";
import { Home, User, UserDetail, Book, BookDetail, NotFound } from "@pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<User />} />
      <Route path="/users/:id" element={<UserDetail />} />
      <Route path="/books" element={<Book />} />
      <Route path="/books/:id" element={<BookDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
