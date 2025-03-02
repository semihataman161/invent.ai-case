import { useParams } from "react-router-dom";

const BookDetail = () => {
  const { id } = useParams();

  return <h1>Book Detail Page: {id}</h1>;
};

export default BookDetail;
