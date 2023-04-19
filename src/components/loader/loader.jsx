import { CircularProgress } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'

const Loader = () => {
  return (
    <Box minHeight={'90vh'}>
     <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} height={"100%"}>
     <CircularProgress />
     </Stack>
    </Box>
  )
}

export default Loader