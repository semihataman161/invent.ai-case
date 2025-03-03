import { useEffect, useState } from "react";
import _ from "lodash";
import { toast } from "react-toastify";
import { observer } from "mobx-react-lite";
import { Box, Typography } from "@mui/material";
import { useStore } from "@store";
import { UserNs } from "@store/types";
import { bookRetunModalRef } from "@helpers/References";
import { IACard } from "@components/commons";
import BookReturnModal from "./book-return-modal";
import UserPresentBorrowedBookTable from "./user-present-borrowed-book-table";
import UserPastBorrowedBookTable from "./user-past-borrowed-book-table";
import { UserDetailScreenProps } from "./index.type";
import { BookReturnModalNs } from "./book-return-modal/index.type";

const UserDetailScreen = ({ id }: UserDetailScreenProps) => {
  const { stoUser } = useStore();

  const [presentBooks, setPresentBooks] = useState<UserNs.PresentBook[]>([]);
  const [pastBooks, setPastBooks] = useState<UserNs.PastBook[]>([]);

  const getUser = async () => {
    const data = await stoUser.getOne(id);
    setPresentBooks(data.books.present);
    setPastBooks(data.books.past);
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleReturn: BookReturnModalNs.Props["onSubmit"] = async (
    bookId,
    score
  ) => {
    const data = await stoUser.return(id, bookId.toString(), { score: +score });

    if (_.isEmpty(data)) {
      return;
    }

    await getUser();
    toast.success("Book returned successfully");
  };

  return (
    <Box display="flex" flexDirection="column" gap={4}>
      <IACard sx={{ width: "50%" }}>
        <Typography variant="h5" component="div" mb={2}>
          Currently Borrowed Books
        </Typography>
        <UserPresentBorrowedBookTable data={presentBooks} />
        <BookReturnModal ref={bookRetunModalRef} onSubmit={handleReturn} />
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
