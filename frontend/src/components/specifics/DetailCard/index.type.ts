import { GridDirection } from "@mui/material";
import { ObjectNs } from "@store/types";

export type DetailCardProps = {
  title: string;
  data: ObjectNs.Any;
  direction: GridDirection;
};
