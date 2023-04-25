import React from "react";
import { CardTitle } from "../Atoms/Atoms";
import RangeSlider from "./CustomSlider";


const Timing = ({ type }) => {

    return (
      <React.Fragment>
        <div className={type + "_timing-block"}>
          <div className="time-start__wrap">
            <CardTitle text="Время отбытия" className={type + "_time-start"} />
            <RangeSlider min={0} max={24} height={10} step={1} type={"start_"+type}/>
          </div>
          <div className="time-end__wrap">
            <CardTitle  text="Время прибытия" className={type + "_time-end"} />
            <RangeSlider min={0} max={24} height={10} step={1} type={"end_"+type} />
          </div>
        </div>
      </React.Fragment>
    );
  };
  
  export default Timing;