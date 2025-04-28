import * as React from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import NoteAddIcon from "@mui/icons-material/NoteAdd";

export default function SpeedDialPostCreate() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <SpeedDial
      ariaLabel="Creating a post"
      style={{ position: "fixed", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
    >
      <SpeedDialAction
        icon={<NoteAddIcon />}
        slotProps={{
          tooltip: {
            title: "Створення поста",
          },
        }}
        onClick={handleClose}
      />
    </SpeedDial>
  );
}
