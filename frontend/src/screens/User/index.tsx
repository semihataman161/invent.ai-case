import { Typography } from "@mui/material";
import UserTable from "@screens/User/user-table";
import { IACard } from "@components/commons";

const UserScreen = () => {
  return (
    <IACard>
      <Typography variant="h5" component="div" mb={2}>
        User Table
      </Typography>
      <UserTable />
    </IACard>
  );
};

export default UserScreen;
