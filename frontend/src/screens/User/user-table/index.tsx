import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useStore } from "@store";
import { IATable } from "@components/commons";
import { headers } from "./headers";

const UserTable = () => {
  const navigate = useNavigate();
  const { stoUser } = useStore();

  const getUsers = async () => {
    await stoUser.getAll();
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleSelect = (id: number) => {
    navigate(id.toString());
  };

  const handleUpdate = (data: (typeof stoUser.data)[0]) => {};

  const handleDelete = (id: number) => {};

  return (
    <IATable
      rows={stoUser.data}
      headers={headers}
      onSelect={handleSelect}
      onDelete={handleDelete}
      onUpdate={handleUpdate}
    />
  );
};

export default observer(UserTable);
