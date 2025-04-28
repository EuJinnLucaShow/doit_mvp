import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Skeleton,
} from "@mui/material";

export default function SceletonPostDetailsCard() {
  return (
    <Card sx={{ width: "100%" }}>
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
        <Skeleton variant="rounded" animation="wave" height={75} width="100%" />
      </CardContent>
      <CardActions>
        <Skeleton variant="rounded" width={"30%"} height={40} />
      </CardActions>
    </Card>
  );
}
