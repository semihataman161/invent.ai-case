import UserDetailCard from "@screens/User/user-detail";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();

  return <UserDetailCard id={id} />;
};

export default UserDetail;
