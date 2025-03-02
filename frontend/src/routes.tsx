import { Routes, Route } from "react-router-dom";
import { Home, User, Book, NotFound } from "@pages";
import { Menu } from "@components/specifics";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<User />} />
      <Route path="/books" element={<Book />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
