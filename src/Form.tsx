import useBooks, { TBook } from "./useBooks";
import { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  Checkbox,
} from "@mui/material";


interface Props {
  open: boolean;
  handleClose: () => void;
}

export default function Form({ open, handleClose }: Props) {
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        pages: 0,
        read: false,
    });
    const [, addBook] = useBooks();

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Book</DialogTitle>
      <DialogContent>
        <DialogContentText>Add a book to the Bookshelf</DialogContentText>
        <TextField
          required
          autoFocus
          margin="dense"
          id="title"
          label="Book Title"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          required
          margin="dense"
          id="author"
          label="Author"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          required
          margin="dense"
          id="pages"
          label="Pages"
          type="number"
          fullWidth
          variant="standard"
        />

        <FormControlLabel control={<Checkbox />} label="Read?" />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button>Add Book</Button>
      </DialogActions>
    </Dialog>
  );
}
