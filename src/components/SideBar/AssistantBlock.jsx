import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormSideBar from "../Forms/FormSideBar";
import SwitchBlock from "./SwitchBlock";
import PriceBlock from "./PriceBlock";
import SideBlock from "./SideBlock";
import { setTrainsParameters } from "../../features/catalogTrainsSlice";

/* Боковая панель, выбор поездки по параметрам*/
const AssistantBlock = () => {
  const { from, to } = useSelector(
    (state) => state.catalogTrains.searchData.travelData
  );
  const [price, setPrice] = useState({ max: 9000, min: 500 });
  const dispatch = useDispatch();


  const handleChangeSwitch = (event) => {
    const inputName = event.target.name;
    const checked = event.target.checked;
    if (from.date && from.city.name && to.city.name)
      dispatch(
        setTrainsParameters({ data: { name: inputName, status: checked } })
      );
  };

  const handleChangePriceSlider = (value) => {
    setPrice({ max: value.max, min: value.min });
    setTimeout(() => {
      dispatch(
        setTrainsParameters({
          data: {
            name: "price",
            value: { price_from: value.min, price_to: value.max },
          },
        })
      );
    }, 2 * 1000);
  };

  return (
    <React.Fragment>
      <div className="assistant-block_wrap">
        <FormSideBar from={from.date} to={to.date} />
        <SwitchBlock handleChange={handleChangeSwitch} />
        <PriceBlock
          min={price.min}
          max={price.max}
          step={100}
          onChange={handleChangePriceSlider}
        />
        <SideBlock type="departure" date={from.date} side="start" />
        <SideBlock type="arrival" date={to.date} side="end" />
      </div>
    </React.Fragment>
  );
};

export default AssistantBlock;
