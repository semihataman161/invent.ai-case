import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Modal, Box, TextField, Button, Typography } from "@mui/material";
import { BookReturnModalNs } from "./index.type";

const BookReturnModal = forwardRef<
  BookReturnModalNs.Ref,
  BookReturnModalNs.Props
>(({ onSubmit }, ref) => {
  const [open, setOpen] = useState(false);
  const [bookId, setBookId] = useState<number | null>(null);
  const [score, setScore] = useState<string>("");

  useImperativeHandle(ref, () => ({
    open: (id: number) => {
      setOpen(true);
      setBookId(id);
    },
    close: () => {
      setOpen(false);
      setBookId(null);
    },
  }));

  const handleScoreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value === "" || (Number(value) >= 0 && Number(value) <= 10)) {
      setScore(value);
    }
  };

  const handleSubmit = () => {
    onSubmit(bookId, score);
    setOpen(false);
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          padding: 2,
          borderRadius: 2,
          boxShadow: 24,
          width: 300,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Enter Score (0-10)
        </Typography>
        <TextField
          label="Score"
          value={score}
          onChange={handleScoreChange}
          type="number"
          fullWidth
          inputProps={{ min: 0, max: 10 }}
          variant="outlined"
          margin="normal"
        />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button onClick={() => setOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </Box>
      </Box>
    </Modal>
  );
});

export default BookReturnModal;
