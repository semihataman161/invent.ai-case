import { Box } from "@mui/material";
import { IAFooterProps } from "./index.type";

const IAFooter = ({ children }: IAFooterProps) => {
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
      {children}
    </Box>
  );
};

export default IAFooter;
