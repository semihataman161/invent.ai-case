import { Typography } from "@mui/material";
import { IACard } from "@components/commons";
import BookTable from "@screens/Book/book-table";

const BookScreen = () => {
  return (
    <IACard sx={{ width: "50%" }}>
      <Typography variant="h5" component="div" mb={2}>
        Book Table
      </Typography>
      <BookTable />
    </IACard>
  );
};

export default BookScreen;
