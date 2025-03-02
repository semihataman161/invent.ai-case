import { useState } from "react";
import { Typography, Grid2, Button, Select, MenuItem } from "@mui/material";
import IACard from "@components/commons/IACard";
import { DetailCardProps } from "./index.type";

const DetailCard = ({
  title,
  data,
  direction,
  options,
  onBorrow,
}: DetailCardProps) => {
  const [selectedValue, setSelectedValue] = useState<string>(options[0].value);

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
      <Select
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
        displayEmpty
        sx={{ mt: 2, width: "100%" }}
      >
        {options.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        onClick={() => {
          onBorrow(selectedValue);
        }}
      >
        Borrow
      </Button>
    </IACard>
  );
};

export default DetailCard;
export type { DetailCardProps };
