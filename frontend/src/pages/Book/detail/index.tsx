import BookDetailCard from "@screens/Book/book-detail";
import { useParams } from "react-router-dom";

const BookDetail = () => {
  const { id } = useParams();

  return <BookDetailCard id={id}/>;
};

export default BookDetail;
