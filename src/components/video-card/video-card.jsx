import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { colors } from "../../constans/colors";
import moment from "moment";
import { Stack } from "@mui/system";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";


const VideoCard = ({ video }) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "360px", md: "315px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={`/video/${video.id.videoId}`}>
        <CardMedia
          image={video?.snippet?.thumbnails?.high?.url}
          alt={video?.snippet?.title}
          sx={{ width: { xs: "100%", sm: "360px" }, height: "180px" }}
        />
      </Link>
      <CardContent
        sx={{
          backgroundColor: {
            xs: "black",
            sm: "red",
            md: "yellow",
            lg: "rgb(207, 228, 238)",
          },
          height: "200px",
          position: "relative",
        }}
      >
        <Link
          style={{ textDecoration: "none" }}
          to={`/video/${video.id.videoId}`}
        >
          <Typography color={"black"} my={"5px"} sx={{ opacity: ".4" }}>
            {moment(video?.snippet?.publishedAt).fromNow()}
          </Typography>
          <Typography
            color={{ xs: "black" }}
            variant={"subtitle1"}
            fontWeight={"bold"}
          >
            {video?.snippet?.title.slice(0, 50)}
          </Typography>
          <Typography
            color={{ xs: "white", md: "black", sm: "black" }}
            variant={"subtitle2"}
            sx={{ opacity: "0.6", fontWeight: "bold" }}
          >
            {video?.snippet.description}
          </Typography>
        </Link>
        <Link to={`/channel/${video?.snippet?.channelId}`}>
          <Stack
            direction={"row"}
            position={"absolute"}
            bottom={"10px"}
            alignItems={"center"}
            gap={"5px"}
          >
            <Avatar src={video?.snippet?.thumbnails?.high?.url} />
            <Typography
              color={{ md: "green", sm: "white", xs: "white" }}
              variant={"subtitle3"}
            >
              {video?.snippet?.channelTitle}
            </Typography>
            <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
          </Stack>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
