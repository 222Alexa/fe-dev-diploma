import React,{useState} from "react";
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { CardTitle } from "../Atoms/Atoms";


const PriceBlock = () => {
const [state, setState] = useState({max:7000, min:1920});
  const onChange = (value) => {
    console.log(value,'value')
    setState({max:value.max, min:value.min})
    
 };
    return (
      <React.Fragment>
        <div className="sidebar-price-block">
          <CardTitle text={"Стоимость"} className="sidebar-price-block" />
          <div className="sidebar-price-block_description">
            <span className="sidebar-price-block_text">от</span>
            <span className="sidebar-price-block_text">до</span>
          </div>
          <InputRange
            id="slider"
            minValue={10}
            maxValue={9000}
            step={10}
            onChange={onChange}
            value={{
               min: state.min,
               max: state.max,
            }}
         />
        </div>
      </React.Fragment>
    );
  };
  
  export default PriceBlock;

  /**   <RangeSlider min={1920} max={7000} step={100} height={19}/> */