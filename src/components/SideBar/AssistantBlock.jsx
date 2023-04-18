import React from "react";
import FormSideBar from "../Forms/FormSideBar";
import SwitchBlock from "./SwitchBlock";
import PriceBlock from "./PriceBlock";
import SideBlock from "./SideBlock";

/* Боковая панель, выбор поездки по параметрам*/
const AssistantBlock = () => {
  return (
    <React.Fragment>
      <div className="assistant-block_wrap">
        <FormSideBar />
        <SwitchBlock />
        <PriceBlock />
        <SideBlock type="departure" />
        <SideBlock type="arrival" />
      </div>
    </React.Fragment>
  );
};

export default AssistantBlock;

