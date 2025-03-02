import { Card, CardContent } from "@mui/material";
import { IACardProps } from "./index.type";

const IACard = ({
  children,
  sx,
  alignItems = "center",
  ...props
}: IACardProps) => {
  return (
    <Card
      {...props}
      sx={{
        margin: "auto",
        ...sx,
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems,
        }}
      >
        {children}
      </CardContent>
    </Card>
  );
};

export default IACard;
export type { IACardProps };
