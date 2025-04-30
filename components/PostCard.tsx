import * as React from "react";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Post } from "@/types/post";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: Readonly<PostCardProps>) {
  return (
    <Card sx={{ maxWidth: 370 }}>
      <CardHeader
        avatar={<Avatar aria-label="recipe">{post.userId}</Avatar>}
        action={
          <IconButton aria-label="delete">
            <DeleteIcon sx={{ color: red[500] }} />
          </IconButton>
        }
        title={post.title}
        subheader={`User ${post.userId}`}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {post.body.slice(0, 100)}...
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          component={Link}
          href={`/posts/${post.id}`}
          aria-label="show more"
          style={{ marginLeft: "auto" }}
        >
          <ArrowForwardIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
