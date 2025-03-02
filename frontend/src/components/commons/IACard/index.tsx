import { Card, CardContent } from "@mui/material";
import { IACardProps } from "./index.type";

const IACard = ({ children, ...props }: IACardProps) => {
  return (
    <Card sx={{ minWidth: 275 }} {...props}>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default IACard;
export type { IACardProps };
