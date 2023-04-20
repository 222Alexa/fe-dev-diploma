import React, { useState} from "react";
//import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
//import { setTrainsParameters } from "../../features/catalogTrainsSlice";
import { styled } from "@mui/material/styles";



const RangeSlider = ({ min, max, step, height, type }) => {
  const [value, setValue] = useState([min, max]);

  const handleChange = (event, newValue, activeThumb) => {
 
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - min), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + min)]);
    }


  };
  const mark = [
    {
      value: type === "price" ? min : min + ":00",
      label: type === "price" ? min : min + ":00",
    },

    { value: value[0], label: type === "price" ? value[0] : value[0] + ":00" },
    { value: value[1], label: type === "price" ? value[1] : value[1] + ":00" },
    {
      value: type === "price" ? max : max + ":00",
      label: type === "price" ? max : max + ":00",
    },
  ];

  /**Здесь ошибка "react.development.js:209 Warning: Failed prop type: Invalid prop `marks` supplied to `ForwardRef(Slider)`, expected one of type [boolean]." И... я понимаю о чем она, но не понимаю способа подружить */
  return (
    <Box
      sx={{
        width: 294,
        marginLeft: type === "price" ? 0 : "30px",
        height: height,
      }}
    >
      <CustomSlider
        getAriaLabel={() => "Custom marks"}
        value={value}
        height={height}
        min={min}
        max={max}
        step={step}
        marks={mark}
        onChange={handleChange}
        getAriaValueText={valuetext}
      />
    </Box>
  );
  /*valueLabelDisplay="auto"*/
};

export default RangeSlider;

const CustomSlider = styled(Slider)(({ theme, height }) => ({
  color: "#FFA800",
  height: height,
  padding: 0,
  marginBottom: "5px",
  width: 294,
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    marginLeft: "8px",

    "&:focus, &:hover, &.Mui-active,&.Mui-focusVisible": {
      boxShadow: "0 0 0 8px rgba(255, 168, 0, .1);",
    },
    "": {
      boxShadow: "none",
    },
    "& .airbnb-bar": {
      height: 9,
      width: 0,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1,
    },
  },
  "& .MuiSlider-track": {
    height: height,
    marginLeft: "8px",
  },
  "& .MuiSlider-rail": {
    color: "#3E3C41",
    border: "1px solid #C4C4C4",

    opacity: 1,
    height: height,
  },
  "& .MuiSlider-markLabel": {
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: "18px",
    lineHheight: "21px",
    color: "#FFFFFF",
  },
}));

const valuetext = (value) => {
  return `${value}`;
};
