import React from "react";
import { CardTitle } from "../../Atoms/Atoms";
import { templateText } from "../../../utils/dataText";
import { nanoid } from "nanoid";

const QuantityTickets = ({
  className,
  data,
  selected,
  setSelected,
  onChangeInput,
}) => {
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
                onClick={(event) => {
                  setSelected({ type: item.type });
                }}
                onChange={(event) => {
                  console.log(event.target, "inp");
                }}
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
                      className + " " + item.type + " input form-control"
                    }
                    id="exampleInputTypeTickets"
                    aria-describedby="typeTickets"
                    defaultValue={item.count}
                    onChange={onChangeInput}
                  />
                </div>{" "}
                <label
                  htmlFor={"exampleInputTypeTickets"}
                  className={className + " " + item.type + "_input-label"}
                >
                  {templateText(item)}
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
