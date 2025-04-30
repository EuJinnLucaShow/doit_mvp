"use client";

import * as React from "react";
import PostCard from "@/components/PostCard";
import SceletonPostCard from "@/components/SceletonPostCard";
import Search from "@/components/Search";
import SpeedDialPostCreate from "@/components/SpeedDialPostCreate";
import { useGetPostsQuery } from "@/lib/services/postsApi";
import { Box, Container, Grid } from "@mui/material";
import { Post } from "@/types/post";

export default function PostsPage() {
  const { data: posts, isLoading, error } = useGetPostsQuery();
  const [filteredPosts, setFilteredPosts] = React.useState<Post[]>([]);

  React.useEffect(() => {
    if (posts) setFilteredPosts(posts);
  }, [posts]);

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
            {Array.from({ length: 6 }, (_, i) => i).map((item, index) => (
              <Grid key={item + index}>
                <SceletonPostCard />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid
            container
            spacing={2}
            sx={{
              width: "100%",
            }}
          >
            <Search posts={posts || []} setFilteredPosts={setFilteredPosts} />
            {filteredPosts?.map((post) => (
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
