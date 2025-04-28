import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{ mb: 4, textAlign: "center" }}
        >
          📅 План виконання тестового завдання
        </Typography>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography variant="h5" gutterBottom>
              📌 День 1 — Старт проєкту і базова архітектура
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
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
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography variant="h5" gutterBottom>
              📌 День 2 — Redux Toolkit і перший запит (отримання постів)
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
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
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}
