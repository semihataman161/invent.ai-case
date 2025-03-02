import { Card, CardContent } from "@mui/material";
import { IACardProps } from "./index.type";

const IACard = ({ children, ...props }: IACardProps) => {
  return (
    <Card {...props}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        {children}
      </CardContent>
    </Card>
  );
};

export default IACard;
export type { IACardProps };
