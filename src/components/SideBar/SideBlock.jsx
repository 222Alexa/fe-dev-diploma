import React, { useState } from "react";
import { CardTitle, MySvgIcon, Button } from "../Atoms/Atoms";
import Timing from "./Timing";
import TripDetails from "./TripDetails";
import icon_arrow from "../../img/sidebar/icon_arrow.svg";
const SideBlock = ({ type, data, children, parent}) => {
  const [showTiming, setShowTiming] = useState(false);
  console.log(data, 'dataSide')
  const basedClasses =
    type === "departure" ? "sidebar-block-departure" : "sidebar-block-arrival";
  //console.log(data, "side");
  const clickHandler = () => {
    setShowTiming(!showTiming);
  };
  return (
    <React.Fragment>
      <div className={"sidebar-side-block " + basedClasses}>
        <div className="sidebar-side-block_header">
          <MySvgIcon
            type="sidebar-side-block"
            icon={icon_arrow}
            className={basedClasses + "_arrow"}
          />
          <CardTitle
            text={type === "departure" ? "Туда" : "Обратно"}
            className="sidebar-side-block"
          />
          {data && data.departure.from.date ? (
            <span className="sidebar-side-block_date">
              {data.departure.from.date}
            </span>
          ) : null}
          <Button type="sidebar-side-block" onClick={clickHandler}>
            {showTiming ? (
              <i className="fa fa-minus" aria-hidden="true"></i>
            ) : (
              <i className="fa fa-plus" aria-hidden="true"></i>
            )}
          </Button>
        </div>
        {showTiming && !data && !parent? <Timing type={type} /> : null}
        {showTiming && parent && <TripDetails/>}
        {children ? children : null}
      </div>
    </React.Fragment>
  );
};

export default SideBlock;


