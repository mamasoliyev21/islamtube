import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { colors } from "../../constans/colors";
import { logo } from "../../constans";
import { Link } from "react-router-dom";
import SearchBar from "../search-bar/search-bar";
const Navbar = () => {
  return (
    <Stack 
      direction={{md: 'row',sm: 'row', xs: 'column'}}
      justifyContent={"space-between"}
      p={2}
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        background: colors.primary,
        alignItems: 'center'
      }}
    >
      <Link to='/'>
        <div style={{ display: "flex" , cursor: "pointer"}}>
          <h1 style={{ paddingTop: "5px" }}>ISLAM</h1>
          <img style={{paddingLeft: "5px"}} height={"40"} src={logo} alt="logo" />
        </div>
      </Link>
      <SearchBar/>
      <Box />
    </Stack>
  );
};

export default Navbar;
