import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Box, Typography } from "@mui/material";
import { useStore } from "@store";
import { UserNs } from "@store/types";
import { UserDetailScreenProps } from "./index.type";
import { IACard } from "@components/commons";
import UserPresentBorrowedBookTable from "./user-present-borrowed-book-table";
import UserPastBorrowedBookTable from "./user-past-borrowed-book-table";

const UserDetailScreen = ({ id }: UserDetailScreenProps) => {
  const { stoUser } = useStore();

  const [presentBooks, setPresentBooks] = useState<UserNs.PresentBook[]>([]);
  const [pastBooks, setPastBooks] = useState<UserNs.PastBook[]>([]);

  const getUser = async () => {
    const data = await stoUser.getOne(id);

    const _presentBooks = data.books.present.map((element, index) => ({
      ...element,
      id: index,
    }));
    setPresentBooks(_presentBooks);

    const _pastBooks = data.books.past.map((element, index) => ({
      ...element,
      id: index,
    }));
    setPastBooks(_pastBooks);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Box display="flex" flexDirection="column" gap={4}>
      <IACard sx={{ width: "50%" }}>
        <Typography variant="h5" component="div" mb={2}>
          Currently Borrowed Books
        </Typography>
        <UserPresentBorrowedBookTable data={presentBooks} />
      </IACard>
      <IACard sx={{ width: "50%" }}>
        <Typography variant="h5" component="div" mb={2}>
          Previously Borrowed Books
        </Typography>
        <UserPastBorrowedBookTable data={pastBooks} />
      </IACard>
    </Box>
  );
};

export default observer(UserDetailScreen);
export type { UserDetailScreenProps };
