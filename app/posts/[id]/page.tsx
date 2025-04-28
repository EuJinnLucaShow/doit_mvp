"use client";

import { use } from "react";
import { useGetPostByIdQuery } from "@/lib/features/posts/postsSlice";
import PostDetailsCard from "@/components/PostDetailsCard";
import { Box, Container } from "@mui/material";

export default function PostDetailsPage({
  params,
}: Readonly<{
  params: Promise<{ id: number }>;
}>) {
  const { id } = use(params);
  const { data: post, isLoading, error } = useGetPostByIdQuery(id);

  if (isLoading) return <div>Loading...</div>;
  if (error || !post) return <div>Post not found</div>;

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
        <PostDetailsCard post={post} />
      </Box>
    </Container>
  );
}
