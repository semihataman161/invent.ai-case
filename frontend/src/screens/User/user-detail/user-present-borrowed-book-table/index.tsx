import { observer } from "mobx-react-lite";
import { bookRetunModalRef } from "@helpers/References";
import { IATable } from "@components/commons";
import { headers } from "./headers";
import { UserPresentBorrowedBookTableProps } from "./index.type";

const UserPresentBorrowedBookTable = ({
  data,
}: UserPresentBorrowedBookTableProps) => {
  const handleSelect = (id: number) => {
    const bookId = data.find((element) => element.id === id).bookId;
    bookRetunModalRef.current?.open(bookId);
  };

  return <IATable rows={data} headers={headers} onSelect={handleSelect} />;
};

export default observer(UserPresentBorrowedBookTable);
export type { UserPresentBorrowedBookTableProps };
