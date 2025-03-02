import { observer } from "mobx-react-lite";
import { IATable } from "@components/commons";
import { headers } from "./headers";
import { UserPastBorrowedBookTableProps } from "./index.type";

const UserPastBorrowedBookTable = ({
  data,
}: UserPastBorrowedBookTableProps) => {
  return <IATable rows={data} headers={headers} />;
};

export default observer(UserPastBorrowedBookTable);
export type { UserPastBorrowedBookTableProps };
