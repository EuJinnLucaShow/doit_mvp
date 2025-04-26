import { Box, Container, Typography } from "@mui/material";

interface PostDetailPageProps {
  readonly params: { readonly id: string };
}

async function getPostIds(): Promise<string[]> {
  return ["1", "2", "3"];
}

export async function generateStaticParams() {
  const ids = await getPostIds();
  return ids.map((id) => ({ id }));
}

export default function PostDetailPage({ params }: PostDetailPageProps) {
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
