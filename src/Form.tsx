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
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <TextField
          required
          margin="dense"
          id="author"
          label="Author"
          type="text"
          fullWidth
          variant="standard"
          value={formData.author}
          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
        />
        <TextField
          required
          margin="dense"
          id="pages"
          label="Pages"
          type="number"
          fullWidth
          variant="standard"
          value={formData.pages}
          onChange={(e) =>
            setFormData({ ...formData, pages: Number(e.target.value) })
          }
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={formData.read}
              onChange={(e) =>
                setFormData({ ...formData, read: e.target.checked })
              }
            />
          }
          label="Read?"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
        onClick={() => {
            (addBook as (book: TBook) => Promise<void>)(formData as TBook);
            setFormData({
                title: "",
                author: "",
                pages: 0,
                read: false,
            });
            handleClose();
        }}
        >Add Book</Button>
      </DialogActions>
    </Dialog>
  );
}
