import { AppBarProps } from "@mui/material";
import { MenuItem } from "@components/index.type";

export type IAAppBarProps = {
  title: string;
  menuItems: MenuItem[];
} & AppBarProps;
