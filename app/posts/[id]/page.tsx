import { Box, Container, Typography } from "@mui/material";

export default function PostDetailPage({ params }: { params: { id: string } }) {
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
          Деталі посту
        </Typography>
        <Typography variant="subtitle1" component="h2">
          ID: {params.id}
        </Typography>
      </Box>
    </Container>
  );
}
