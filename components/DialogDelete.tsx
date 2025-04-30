import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDeletePostMutation } from "@/lib/services/postsApi";
import { useRouter } from "next/navigation";

interface DialogProps {
  id: number;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DialogDelete({
  open,
  setOpen,
  id,
}: Readonly<DialogProps>) {
  const [isDeleting, setIsDeleting] = React.useState(false);
  const router = useRouter();
  const [deletePost] = useDeletePostMutation();

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await deletePost(id).unwrap();
      setIsDeleting(false);
      handleClose();
      router.push("/posts");
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Error deleting the post");
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Confirm"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete this post?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>CANCEL</Button>
        <Button loading={isDeleting} onClick={handleDelete} autoFocus>
          DLELETE
        </Button>
      </DialogActions>
    </Dialog>
  );
}
