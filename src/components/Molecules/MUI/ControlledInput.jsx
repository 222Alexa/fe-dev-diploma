import React from "react";

import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
const ControlledInput = ({ id, type, state, onChangeInput, errorDocs }) => {
  const classes = useStyles(errorDocs);
  let placeholder;
  if (type === "date") placeholder = "ДД/ММ/ГГГГ";
  else if (type === "passport" && id === "seria") placeholder = "_ _ _ _ ";
  else if (type === "passport" && id === "number") placeholder = "_ _ _ _ _ _ ";
  else if (type === "certificate")
    placeholder = "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _";
  else placeholder = "";
//console.log(state, 'input')
  return (
    <React.Fragment>
      <TextField
        id={id}
        type={type}
        className={classes.customStyle}
        placeholder={placeholder}
        value={state}
        onChange={(event) => {
          onChangeInput(event.target.value, id, type);
        }}
      />
    </React.Fragment>
  );
};

export default ControlledInput;
/*const maskPassport = { seria: "_ _ _ _", number: "_ _ _ _ _ _" }; //маска для поля ввода пока для все одинаковая.она исчезает полностью на фокусе или по мере заполнения?
const maskBirthCertificate = { number: "_ _ _ _ _ _ _ _ _ _ _ _" };
const maskDate = "ДД/ММ/ГГГГ";*/

const useStyles = makeStyles({
  customStyle: {
    "& .MuiOutlinedInput-root": {
      height: 50,
      paddingTop: 3,
      "& input": {
        height: 15,
      },
      "& fieldset": {
        height: 56,
      },

      "&.Mui-focused fieldset": {
        borderColor: "#ffa800",
        borderWidth: "2px",
      },
    },
  },
});
