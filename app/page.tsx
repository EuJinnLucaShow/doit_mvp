import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AccordionUsage from "@/components/AccordionUsage";
import { items } from "@/data/items";

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
        {items.map((item, index) => (
          <AccordionUsage
            key={item.id}
            item={item}
            defaultExpanded={index === items.length - 1}
          />
        ))}
      </Box>
    </Container>
  );
}
