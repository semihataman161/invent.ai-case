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

  return (
    <IATable rows={stoBook.data} headers={headers} onSelect={handleSelect} />
  );
};

export default observer(BookTable);
