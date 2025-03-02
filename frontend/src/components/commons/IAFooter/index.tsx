import { Box, Typography } from "@mui/material";

const IAFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
        backgroundColor: "#F0F0F0",
        color: "#000",
        textAlign: "center",
        padding: "10px",
      }}
    >
      <Typography variant="body2">
        © {currentYear} Invent Analytics. All rights reserved.
      </Typography>
    </Box>
  );
};

export default IAFooter;
