import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "@store";
import { BookDetailScreenProps } from "./index.type";
import { DetailCard } from "@components/specifics";

const BookDetailScreen = ({ id }: BookDetailScreenProps) => {
  const { stoBook } = useStore();

  const [detailData, setDetailData] = useState([]);

  const getBook = async () => {
    const data = await stoBook.getOne(id);

    const modifiedData = Object.entries(data).reduce((acc, [key, value]) => {
      const displayName = getDisplayNameForKey(key);
      acc.push({ key, displayName, value: value || "-" });
      return acc;
    }, []);

    setDetailData(modifiedData);
  };

  const getDisplayNameForKey = (key: string) => {
    const names = {
      id: "Id",
      name: "Name",
      author: "Author",
      year: "Year",
      currentBorrower: "Current Owner",
      score: "Average Rating",
    };

    return names[key] || key;
  };

  useEffect(() => {
    getBook();
  }, []);

  return (
    <DetailCard title={"Book Details"} data={detailData} direction="column" />
  );
};

export default observer(BookDetailScreen);
export type { BookDetailScreenProps };
