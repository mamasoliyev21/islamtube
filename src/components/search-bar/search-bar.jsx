import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import React from "react";
import { colors } from "../../constans/colors";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const SearchBar = () => {
  const navigate = useNavigate()
  const [value, setValue] = useState()
  const submitHandler = (e) =>{
    e.preventDefault()
    if(value){
      navigate(`/search/${value}`)
      setValue('')
    }
  }
  return (
    <Paper
      component={"form"}
      onSubmit={submitHandler}
      sx={{
        border: `1px solid ${colors.secondary}`,
        pl: 3,
        borderRadius: "none",
        boxShadow: 'none',
        mr: 5
      }}
    >
      <input
        type="text"
        placeholder="search...."
        className="search-bar"
        onChange={(e)=> setValue(e.target.value)}
      />
      <IconButton type="submit">
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
