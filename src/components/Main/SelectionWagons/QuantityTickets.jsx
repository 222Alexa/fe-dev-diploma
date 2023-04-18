import React from "react";
import { CardTitle } from "../../Atoms/Atoms";

import { nanoid } from "nanoid";

const QuantityTickets = ({ className, data, selected, setSelected }) => {

  
  const basedClassesItem = className + "_block-menu-item";
  return (
    <React.Fragment>
      <div className={className + "_block"}>
        <CardTitle className={className + "_block"} text="Количество билетов" />

        <div className={className + "_block-menu"}>
          {data.map((item) => {
            return (
              <div
                key={nanoid()}
                id={item.type}
                className={
                  item.type === selected.type
                    ? basedClassesItem + " selected_type-tickets"
                    : basedClassesItem
                }
                onClick={() => setSelected({ type: item.type })}
              >
                <div
                  className={
                    "input-group-prepend " + className + "_input-group"
                  }
                >
                  <span
                    className={
                      className + " " + item.type + "_input-group-text"
                    }
                  >
                    {item.text + " \u2013"}{" "}
                  </span>
                  <input
                    type="text"
                    className={
                      className + " " + item.type + "input form-control"
                    }
                    id="exampleInputTypeTickets"
                    aria-describedby="typeTickets"
                    defaultValue={item.count}
                    onChange={(event) => console.log(event.target.value)}
                  />
                </div>{" "}
                <label
                  htmlFor={"exampleInputTypeTickets"}
                  className={className + " " + item.type + "_input-label"}
                >
                  {item.deskription}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default QuantityTickets;
