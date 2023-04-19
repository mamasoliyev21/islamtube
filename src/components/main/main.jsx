import Category from "../category/category";
import { Button, Stack, Typography } from "@mui/material";
import { Container, Box } from "@mui/system";
import { useState, useEffect } from "react";
import { colors } from "../../constans/colors";
import Videos from "../videos/videos";
import { ApiServise } from "../../servise/api.servise";
const Main = () => {
  const [selectedCatagory, setSelectedCategory] = useState("New");
  const [videos , setvideos] =  useState([]);

  const setSelectedCategorHandler = (category) => setSelectedCategory(category);

  useEffect(() => {
     const getData = async() =>{
        try {
          const data = await ApiServise.fetching(`search?part=snippet&q=${selectedCatagory}`)
          setvideos(data)
        } catch (error) {
          console.log(error);
        }
     }
     getData()
  }, [selectedCatagory]);
  // console.log(videos);

  return (
    <Stack maxWidth={'xs'}>
      <Category
        setSelectedCategorHandler={setSelectedCategorHandler}
        selectedCatagory={selectedCatagory}
      />
      <Box>
        <Container maxWidth={"90%"}>
          <Typography variant="h4" fontWeight={"bold"} mb={2}>
            {selectedCatagory}{" "}
            <span style={{ color: `${colors.secondary}` }}>videos</span>
          </Typography>
          <Videos videos= {videos}/>
        </Container>
      </Box>
    </Stack>
  );
};

export default Main;
