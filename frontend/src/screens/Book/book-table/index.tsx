import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useStore } from "@store";
import { IATable } from "@components/commons";
import { headers } from "./headers";

const BookTable = () => {
  const navigate = useNavigate();
  const { stoBook } = useStore();

  const getBooks = async () => {
    const data = await stoBook.getAll();
  };

  useEffect(() => {
    getBooks();
  }, []);

  const handleSelect = (id: number) => {
    navigate(id.toString());
  };

  const handleUpdate = (data: (typeof stoBook.data)[0]) => {};

  const handleDelete = (id: number) => {};

  return (
    <IATable
      rows={stoBook.data}
      headers={headers}
      onSelect={handleSelect}
      onUpdate={handleUpdate}
      onDelete={handleDelete}
    />
  );
};

export default observer(BookTable);
