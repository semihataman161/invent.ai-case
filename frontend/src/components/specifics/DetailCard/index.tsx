import IACard from "@components/commons/IACard";
import { Typography, Grid2 } from "@mui/material";
import { DetailCardProps } from "./index.type";

const DetailCard = ({ title, data }: DetailCardProps) => {
  return (
    <IACard>
      <Typography variant="h5" component="div">
        {title}
      </Typography>
      <Grid2 container spacing={2} sx={{ mt: 2 }}>
        {Object.entries(data).map(([key, value]) => (
          <Grid2 key={key} component="div">
            <Typography variant="body1" component="div" fontWeight="bold">
              {key}:
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
