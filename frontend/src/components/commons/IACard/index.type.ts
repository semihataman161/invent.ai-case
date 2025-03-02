import { CardProps } from "@mui/material";

export type IACardProps = {
  alignItems?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
} & CardProps;
