import React, {useState} from "react";
import { useDispatch, /*useSelector */} from "react-redux";
import FormSideBar from "../Forms/FormSideBar";
import SwitchBlock from "./SwitchBlock";
import PriceBlock from "./PriceBlock";
import SideBlock from "./SideBlock";
import { setTrainsParameters } from "../../features/catalogTrainsSlice";

/* Боковая панель, выбор поездки по параметрам*/
const AssistantBlock = () => {

  /*const { price_from, price_to } = useSelector(
    (state) => state.catalogTrains.searchData.trainsParameters
  );*/
  const [price, setPrice] = useState({ max: 9000, min: 500 });
  const dispatch = useDispatch();
  const handleChangeSwitch = (event) => {
    const inputName = event.target.name;
    const checked = event.target.checked;
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
    },2*1000)
  

  };

  const handleChangeDateSlider = (value, type, point) => {
    if (type === "departure") {
      point === "start"
        ? dispatch(
            setTrainsParameters({
              data: {
                name: "start_departure_hour",
                from: value.min,
                to: value.max,
              },
            })
          )
        : dispatch(
            setTrainsParameters({
              data: {
                name: "start_arrival_hour",
                from: value.min,
                to: value.max,
              },
            })
          );
    } else if (type === "arrival") {
      point === "start"
        ? dispatch(
            setTrainsParameters({
              data: {
                name: "end_departure_hour",
                from: value.min,
                to: value.max,
              },
            })
          )
        : dispatch(
            setTrainsParameters({
              data: {
                name: "end_arrival_hour",
                from: value.min,
                to: value.max,
              },
            })
          );
    }
  };

  return (
    <React.Fragment>
      <div className="assistant-block_wrap">
        <FormSideBar />
        <SwitchBlock handleChange={handleChangeSwitch} />
        <PriceBlock
          min={price.min}
          max={price.max}
          step={100}
          onChange={handleChangePriceSlider}
        />
        <SideBlock type="departure" onChange={handleChangeDateSlider} />
        <SideBlock type="arrival" onChange={handleChangeDateSlider} />
      </div>
    </React.Fragment>
  );
};

export default AssistantBlock;
