import React from "react";
import {Box} from '@mui/material'
import { Routes, Route } from "react-router-dom";
import {Main, Channel,Search,VideoDetail} from '../'
import Navbar from "../navbar/navbar";
const App = () => {
  return (
    // <Container>
      <Box>
      <Navbar/>
      <Routes>
      <Route path="/" element= {<Main/>}/>
      <Route path="/channel/:id" element= {<Channel/>}/>
      <Route path="/video/:id" element= {<VideoDetail/>}/>
      <Route path="/search/:id" element= {<Search/>}/>
     </Routes>
    </Box>
    // </Container>
  );
};

export default App;
