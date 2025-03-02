import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "@store";
import { BookDetailCardProps } from "./index.type";
import { DetailCard } from "@components/specifics";

const BookDetailCard = ({ id }: BookDetailCardProps) => {
  const { stoBook } = useStore();

  const getBook = async () => {
    await stoBook.getOne(id);
  };

  useEffect(() => {
    getBook();
  }, []);

  return <DetailCard title={"Book Details"} data={stoBook.selected} />;
};

export default observer(BookDetailCard);
export type { BookDetailCardProps };
