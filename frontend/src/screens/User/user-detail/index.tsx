import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "@store";
import { UserDetailCardProps } from "./index.type";
import { DetailCard } from "@components/specifics";

const UserDetailCard = ({ id }: UserDetailCardProps) => {
  const { stoUser } = useStore();

  const getUser = async () => {
    await stoUser.getOne(id);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <DetailCard
      title={"User Details"}
      data={stoUser.selected}
      direction="column"
    />
  );
};

export default observer(UserDetailCard);
export type { UserDetailCardProps };
