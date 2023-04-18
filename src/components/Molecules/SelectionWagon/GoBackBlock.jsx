import React from "react";
import { useNavigate } from "react-router-dom";
import {Button} from "../../Atoms/Atoms";


const GoBackBlock = ({ className, type }) => {
    /**"выбрать другой поезд" */
    const navigate=useNavigate();

    const clickHandler =() => {
navigate("/fe-dev-diploma/trains");
    }
    return (
      <React.Fragment>
        <div className={className + "_buttons-group"}>
          <Button type={className + type}>
            <i
              className="fa fa-2x fa-long-arrow-right"
              style={{ color: "#fff" }}
              aria-hidden="true"
            ></i>
          </Button>
          <Button type={type + "-text"} onClick={clickHandler}>Выбрать другой поезд</Button>
        </div>
      </React.Fragment>
    );
  };

  export default GoBackBlock;