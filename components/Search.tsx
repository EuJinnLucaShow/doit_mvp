import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Post } from "@/types/post";

interface PostCardProps {
  posts: Post[];
  setFilteredPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

export default function Search({
  posts,
  setFilteredPosts,
}: Readonly<PostCardProps>) {
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    const filtered = search
      ? posts.filter((post) =>
          post.title.toLowerCase().includes(search.toLowerCase())
        )
      : posts;
    setFilteredPosts(filtered);
  }, [search, posts, setFilteredPosts]);

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
    >
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Пошук за заголовком..."
        inputProps={{ "aria-label": "search by title" }}
        value={search}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setSearch(event.target.value);
        }}
      />
    </Paper>
  );
}
