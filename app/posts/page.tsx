"use client";

import PostCard from "@/components/PostCard";
import SceletonPostCard from "@/components/SceletonPostCard";
import Search from "@/components/Search";
import SpeedDialPostCreate from "@/components/SpeedDialPostCreate";
import { useGetPostsQuery } from "@/lib/features/posts/postsSlice";
import { Box, Container, Grid } from "@mui/material";

export default function PostsPage() {
  const { data: posts, isLoading, error } = useGetPostsQuery();

  if (error) return <div>Error loading posts</div>;

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
        {isLoading ? (
          <Grid
            container
            spacing={2}
            sx={{
              justifyContent: "center",
            }}
          >
            {Array.from({ length: 6 }).map((_, index) => (
              <Grid key={index}>
                <SceletonPostCard />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid
            container
            spacing={2}
            sx={{
              justifyContent: "center",
            }}
          >
            <Search />
            {posts?.map((post) => (
              <Grid key={post.id}>
                <PostCard post={post} />
              </Grid>
            ))}
          </Grid>
        )}
        {isLoading ? null : <SpeedDialPostCreate />}
      </Box>
    </Container>
  );
}
