import { Box, Stack } from '@mui/system';
import React from 'react'
import VideoCard from '../video-card/video-card';
import ShanelCard from '../shanell-card/shanell-card'
import Loader from '../loader/loader';


const Videos = ({videos}) => {
  if(!videos) return <Loader/>
  return (
    <Stack width={"100%"} direction={"row"} flexWrap={"wrap"} justifyContent={"start"} alignItems={"center"} gap={2}>
        {
          videos.map(item =>
           <Box key={item.id.videoId}>
            {item.id.videoId && <VideoCard video={item}/>}
            {item.id.channelId && <ShanelCard video={item}/>}
           </Box>  
          ) 
        }
    </Stack>
  )
}

export default Videos