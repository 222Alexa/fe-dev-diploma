import React from "react";

import { useSelector } from "react-redux";

import TrainsMenuCard from "../../Main/SelectionTrain/TrainsMenu/TrainsMenuCard";

const ScreenTrain = () => {
  const selectedTrain = useSelector(
    (state) => state.catalogTrains.seletedTrain
  );
 

  return (
    <React.Fragment>
      <div className="screening-block screening-block_train">
        <TrainsMenuCard
          departure={selectedTrain}
     
        />
      </div>
    </React.Fragment>
  );
};

export default ScreenTrain;

/** Данные карточки поездки(номер поезда , время, города, вокзалы, вагоны)*/
