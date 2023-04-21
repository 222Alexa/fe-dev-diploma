import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setTrainId,
  setSelectionTrain,
} from "../../../../features/catalogTrainsSlice";
import TrainsMenuCard from "./TrainsMenuCard";

import { nanoid } from "nanoid";

const TrainsMenu = ({ currentItems }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (!currentItems) {
    return;
  }
  console.log(currentItems, 'current')
  const clickHandler = ( id, item) => {

    dispatch(setTrainId({ id: item._id }));
    dispatch(setSelectionTrain({ data: item }));
    navigate(`/fe-dev-diploma/trains/${item._id}`);
  };

  return (
    <React.Fragment>
      <div className="card-deck trains-menu-group m-0">
        {currentItems && currentItems.length > 0
          ? currentItems.map((item) => (
              <TrainsMenuCard key={nanoid()} {...item} onClick={clickHandler} />
            ))
          : null}
      </div>
    </React.Fragment>
  );
};
export default TrainsMenu;
