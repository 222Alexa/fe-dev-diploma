import React from "react";

const Card = ({ id,className, children }) => {
  /**Card, this is card)) */

  return (
    <React.Fragment>
      <div id={id} className={className + "_card card"}>{children}</div>
    </React.Fragment>
  );
};

export default Card;
