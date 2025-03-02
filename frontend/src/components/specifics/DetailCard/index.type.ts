import { GridDirection } from "@mui/material";
import { ObjectNs, PairNs } from "@store/types";

export type DetailCardProps = {
  title: string;
  data: ObjectNs.Any;
  direction: GridDirection;
  options: PairNs.LabelValue[];
  onBorrow: (userId: string) => void;
};
