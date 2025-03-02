import { observer } from "mobx-react-lite";
import { IATable } from "@components/commons";
import { headers } from "./headers";
import { UserPresentBorrowedBookTableProps } from "./index.type";

const UserPresentBorrowedBookTable = ({
  data,
}: UserPresentBorrowedBookTableProps) => {
  return <IATable rows={data} headers={headers} />;
};

export default observer(UserPresentBorrowedBookTable);
export type { UserPresentBorrowedBookTableProps };
