import { Typography, Grid2 } from "@mui/material";
import IACard from "@components/commons/IACard";
import { DetailCardProps } from "./index.type";

const DetailCard = ({ title, data, direction }: DetailCardProps) => {
  return (
    <IACard alignItems={"flex-start"} sx={{ width: "30%" }}>
      <Typography variant="h5" component="div">
        {title}
      </Typography>
      <Grid2 container spacing={2} sx={{ mt: 2 }} direction={direction}>
        {data.map(({ key, displayName, value }) => (
          <Grid2 key={key} component="div">
            <Typography variant="body1" component="div" fontWeight="bold">
              {displayName}:
            </Typography>
            <Typography variant="body2">{String(value)}</Typography>
          </Grid2>
        ))}
      </Grid2>
    </IACard>
  );
};

export default DetailCard;
export type { DetailCardProps };
