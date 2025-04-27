import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Copyright from "@/components/Copyright";
import { List, ListItem, ListItemText } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
          День 2 — Redux Toolkit і перший запит (отримання постів)
        </Typography>

        <List sx={{ width: "100%", maxWidth: 600 }}>
          <ListItem>
            <ListItemText primary="✅ Налаштувати store (Redux Toolkit: configureStore)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Створити slice для postsSlice (initialState, reducers, RTK Query)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Реалізувати запит отримання всіх постів" />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ На сторінці /posts показати список постів (Grid з картками Card)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Skeleton-плейсхолдери поки вантажиться" />
          </ListItem>
        </List>
        <Copyright />
      </Box>
    </Container>
  );
}
