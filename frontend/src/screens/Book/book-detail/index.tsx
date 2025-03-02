import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "@store";
import { BookDetailScreenProps } from "./index.type";
import { DetailCard } from "@components/specifics";

const BookDetailScreen = ({ id }: BookDetailScreenProps) => {
  const { stoBook } = useStore();

  const getBook = async () => {
    await stoBook.getOne(id);
  };

  useEffect(() => {
    getBook();
  }, []);

  return (
    <DetailCard
      title={"Book Details"}
      data={stoBook.selected}
      direction="column"
    />
  );
};

export default observer(BookDetailScreen);
export type { BookDetailScreenProps };
