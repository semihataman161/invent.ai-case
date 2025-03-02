import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();

  return <h1>User Detail Page: {id}</h1>;
};

export default UserDetail;
