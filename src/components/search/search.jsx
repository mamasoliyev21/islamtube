import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container,Box } from '@mui/system'
import { Typography, } from '@mui/material'
import { ApiServise } from '../../servise/api.servise'
import Videos from '../videos/videos'
import { colors } from '../../constans/colors'
const SearchData = () => {
  const [videos, setVideos] = useState()
  const {id} = useParams()

  useEffect(() => {
    const getData = async() =>{
       try {
         const data = await ApiServise.fetching(`search?part=snippet&q=${id}`)
         setVideos(data)
       } catch (error) {
         console.log(error);
       }
    }
    getData()
 }, [id]);
  return (
    <Box p={2} sx={{ height: '90vh' }}>
      <Typography variant={'h4'} fontWeight={'bold'} mb={2}>
        Search results fro <span style={{ color: colors.secondary }}>{id}</span> videos
      </Typography>
      <Videos videos={videos} />
  </Box>
  )
}

export default SearchData