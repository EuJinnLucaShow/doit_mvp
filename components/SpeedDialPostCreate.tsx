import * as React from "react";
import { useRouter } from "next/navigation";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import NoteAddIcon from "@mui/icons-material/NoteAdd";

export default function SpeedDialPostCreate() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLink = () => {
    router.push("/posts/create");
  };

  return (
    <SpeedDial
      ariaLabel="Створення поста"
      style={{ position: "fixed", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
    >
      <SpeedDialAction
        icon={<NoteAddIcon />}
        aria-label="Створити пост"
        slotProps={{
          tooltip: {
            title: "Створити пост",
          },
        }}
        onClick={handleLink}
      />
    </SpeedDial>
  );
}
