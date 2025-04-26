import { Box, Container, Typography } from "@mui/material";
import { useRouter } from "next/router";

export default function PostDetailPage() {
  const router = useRouter();
  const { id } = router.query;

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
          ID: {id}
        </Typography>
      </Box>
    </Container>
  );
}
