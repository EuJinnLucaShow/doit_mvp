import * as React from "react";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Post } from "@/lib/types/post";
import { Button } from "@mui/material";
import DialogDelete from "./DialogDelete";

interface PostCardProps {
  post: Post;
}

export default function PostDetailsCard({ post }: Readonly<PostCardProps>) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Card sx={{ width: "100%" }}>
        <CardHeader
          avatar={<Avatar aria-label="recipe">{post.userId}</Avatar>}
          title={post.title}
          subheader={post.userId}
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {post.body}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={handleClickOpen}
          >
            ВИДАЛИТИ
          </Button>
          <Button
            variant="outlined"
            component={Link}
            href={`/posts`}
            aria-label="back"
            startIcon={<ArrowBackIcon />}
          >
            ДО СПИСКУ
          </Button>
        </CardActions>
      </Card>
      {open && <DialogDelete open={open} setOpen={setOpen} id={post.id} />}
    </>
  );
}
