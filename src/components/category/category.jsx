import { Stack } from "@mui/system";
import React from "react";
import { category } from "../../constans/category";
import { colors } from "../../constans/colors";
const Category = ({ setSelectedCategorHandler, selectedCatagory }) => {
  return (
    <Stack direction={"row"} sx={{ overflowX: "scroll" }}>
      {category.map((item) => (
        <button
          key={item.name}
          className="category-btn"
          style={{ borderRadius: "0" , background: item.name === selectedCatagory && colors.secondary,
          color: item.name === selectedCatagory && "white"
        }
        }
          onClick={()=> setSelectedCategorHandler(item.name)}
        >
          <span style={{ color: item.name === selectedCatagory ? "white":  colors.secondary, marginRight: "15px" }}>
            {item.icon}
          </span>
          <span style={{ opacity: "1.1" }}>{item.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Category;
