import { useParams } from "react-router-dom";
import UserDetailScreen from "@screens/User/user-detail";

const UserDetail = () => {
  const { id } = useParams();

  return <UserDetailScreen id={id} />;
};

export default UserDetail;
