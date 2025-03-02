import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "@store";
import { PairNs, UserNs } from "@store/types";
import { DetailCard, DetailCardProps } from "@components/specifics";
import { BookDetailScreenProps } from "./index.type";

const BookDetailScreen = ({ id }: BookDetailScreenProps) => {
  const { stoBook, stoUser } = useStore();

  const [detailData, setDetailData] = useState([]);
  const [userOptions, setUserOptions] = useState<PairNs.LabelValue[]>([]);
  const [loading, setLoading] = useState(true);

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

  const getUsers = async () => {
    let data: UserNs.BaseResponse[] = [];

    if (stoUser.loaded && stoUser.data.length > 0) {
      data = stoUser.data;
    } else {
      const response = await stoUser.getAll();
      data = response?.data || [];
    }

    const _userOptions: PairNs.LabelValue[] = data.map((element) => ({
      label: element.name,
      value: element.id.toString(),
    }));

    setUserOptions(_userOptions);
  };

  useEffect(() => {
    const fetchData = async () => {
      await getBook();
      await getUsers();
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleBorrow: DetailCardProps["onBorrow"] = async (userId) => {
    await stoUser.borrow(userId, id);
    await getBook();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <DetailCard
      title={"Book Details"}
      data={detailData}
      direction="column"
      options={userOptions}
      onBorrow={handleBorrow}
    />
  );
};

export default observer(BookDetailScreen);
export type { BookDetailScreenProps };
