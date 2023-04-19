import { CheckCircle } from "@mui/icons-material";
import { CardContent, Typography,CardMedia} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import Loader from "../loader/loader";

const ChannelCard = ({ video  }) => {
  console.log(video);
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "ceneter",
        width: { xs: "356px", md: "315px" },
        height: "326px",
        margin: "auto",
      }}
    >
    <Link to={`channel/${video?.id.channelId ? video?.id.channelId: video?.id}`}>
    <CardContent sx={{
        display:"flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }}>
    <CardMedia
        sx={{
            borderRadius: '50%',
            height: "180px",
            width: "180px",
            mb: 2,
            border: "1px solid green"
        }}
        image={video?.snippet?.thumbnails?.high?.url}
        alt={video?.snippet?.title}
      />
      <Typography variant={"h6"}>
           {video?.snippet?.title}

           <CheckCircle sx={{fontSize: '14px', color: 'gray', ml: "5px"}}/>
      </Typography>
   
      {
    video?.statistics?.subscriberCount ?   video?.statistics?.subscriberCount && (
            <Typography sx={{fontSize: "15px", fontWeight: 500, color: "gray"}}>
                {parseInt(video?.statistics?.subscriberCount).toLocaleString('en-us')} Subscribers
            </Typography>
        ): <Loader/>
      }
    </CardContent>
    </Link>
    </Box>
  );
};

export default ChannelCard ;
