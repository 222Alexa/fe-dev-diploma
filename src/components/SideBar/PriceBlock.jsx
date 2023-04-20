import React from "react";
import RangeSlider from "./CustomSlider";
//import InputRange from "react-input-range";
//import "react-input-range/lib/css/index.css";
import { CardTitle } from "../Atoms/Atoms";

const PriceBlock = ({ onChange, min, max, step }) => {
  /*const { price_from, price_to } = useSelector(
    (state) => state.catalogTrains.searchData.trainsParameters
  );
  const [state, setState] = useState({ max: 5000, min: 100 });
*/
  /* const dispatch = useDispatch();
  const onChange = (value) => {
    console.log(value, "value");
    
    setState({ max: value.max, min: value.min });
  };*/
  return (
    <React.Fragment>
      <div className="sidebar-price-block">
        <CardTitle text={"Стоимость"} className="sidebar-price-block" />
        <div className="sidebar-price-block_description">
          <span className="sidebar-price-block_text">от</span>
          <span className="sidebar-price-block_text">до</span>
        </div>
        <RangeSlider
          min={500}
          max={9000}
          height={19}
          step={100}
          type={"price"}
        />
      </div>
    </React.Fragment>
  );
};

export default PriceBlock;

/**   <RangeSlider min={1920} max={7000} step={100} height={19}/> */
/*        /*<InputRange
          id="slider"
          minValue={500}
          maxValue={9000}
          step={step}
          onChange={onChange}
          value={{
            min: min,
            max: max,
          }}
        />*/
