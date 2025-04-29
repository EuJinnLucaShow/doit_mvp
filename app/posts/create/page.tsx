import StepperCreatePost from "@/components/StepperCreatePost";
import { Box, Container, Typography } from "@mui/material";

export default function CreatePostPage() {
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
          Створити новий пост
        </Typography>
        <StepperCreatePost />
      </Box>
    </Container>
  );
}
