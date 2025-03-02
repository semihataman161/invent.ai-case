import { Typography } from "@mui/material";
import { IAFooter } from "@components/commons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <IAFooter>
      <Typography variant="body2">
        © {currentYear} Invent Analytics. All rights reserved.
      </Typography>
    </IAFooter>
  );
};

export default Footer;
