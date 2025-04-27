import * as React from "react";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";

export default function Copyright() {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        my: 7,
        color: "text.secondary",
      }}
    >
      {"Copyright © "}
      <MuiLink color="inherit" href="https://doit-mvp.vercel.app/">
        DOiT MVP
      </MuiLink>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}
