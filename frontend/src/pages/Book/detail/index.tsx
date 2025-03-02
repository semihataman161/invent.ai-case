import { useParams } from "react-router-dom";
import BookDetailScreen from "@screens/Book/book-detail";

const BookDetail = () => {
  const { id } = useParams();

  return <BookDetailScreen id={id} />;
};

export default BookDetail;
