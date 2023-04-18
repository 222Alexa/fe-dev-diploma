import React from "react";
import GoBackBlock from "../../Molecules/SelectionWagon/GoBackBlock";

import Card from "../../Main/CardsBlock/Card";
import {
  CardBody,
  CardBottom,
  CardTop,
} from "../../Main/CardsBlock/CardsMolecules";
import { getDuration } from "../../../utils/trainSelectionUtils";
const TrailDetails = ({ className, data }) => {
 
  /**инфо о поезде на странице выбора вагона,  "выбрать другой поезд" */
  const duration = getDuration(data.to.datetime, data.from.datetime);
  return (
    <React.Fragment>
      <div className={className + "_details"}>
        <GoBackBlock className={className} type={" come-back"} />
        <Card data={data} className={"trains-block"}>
          <CardTop className={"trains-block_card-top"} data={data} />
          <CardBody className={"trains-block_body"} data={data} />
          <CardBottom className={"trains-block"} data={duration} />
        </Card>
      </div>
    </React.Fragment>
  );
};

export default TrailDetails;
