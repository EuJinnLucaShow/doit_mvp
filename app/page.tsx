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
          День 1 — Старт проєкту і базова архітектура
        </Typography>

        <List sx={{ width: "100%", maxWidth: 600 }}>
          <ListItem>
            <ListItemText primary="✅ Створити проект npx create-next-app@latest (з App Router)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Підключити Material UI" />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Налаштувати ThemeProvider (світла/темна тема)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Зробити базовий AppBar + Drawer із переходами" />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Створити порожні сторінки /, /posts, /posts/create, /posts/[id]" />
          </ListItem>
        </List>
        <Copyright />
      </Box>
    </Container>
  );
}
