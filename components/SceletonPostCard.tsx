import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Skeleton,
} from "@mui/material";

export default function SceletonPostCard() {
  return (
    <Card style={{ width: 370 }}>
      <CardHeader
        avatar={
          <Skeleton
            animation="wave"
            variant="circular"
            width={40}
            height={40}
          />
        }
        title={
          <Skeleton
            animation="wave"
            height={20}
            width="80%"
            style={{ marginBottom: 6 }}
          />
        }
        subheader={<Skeleton animation="wave" height={20} width="80%" />}
      />
      <CardContent>
        <Skeleton
          animation="wave"
          variant="rounded"
          width={"100%"}
          height={85}
        />
      </CardContent>
      <CardActions>
        <Skeleton variant="rounded" width={"100%"} height={40} />
      </CardActions>
    </Card>
  );
}
