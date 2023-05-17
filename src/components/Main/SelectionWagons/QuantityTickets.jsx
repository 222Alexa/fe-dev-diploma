import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { CardTitle } from "../../Atoms/Atoms";
import Tooltip from "../../Molecules/Tooltip";
import { templateText } from "../../../utils/dataText";
import { setTicketNoSeats } from "../../../features/passengersSlice";
import { nanoid } from "nanoid";

const QuantityTickets = ({ className, data, selected, setSelected }) => {
  const dispatch = useDispatch();
  const inputRef = useRef();

 
  const basedClassesItem = className + "_block-menu-item";
  const onClickSelected = (type) => {
    setSelected({ type: type });
  };
 
  const onChangeInput = (event) => {
    if (event.target.value === "") {

      return;
    }
    inputRef.current = event.target.parentElement;
    if (data[0].count < Number(event.target.value)) {
      
    
      inputRef.current.classList.add("error-quantity");
      inputRef.current.nextElementSibling.style.visibility = "visible";
     
      return;
    }
    console.log(inputRef.current,'inputRef.current')
    inputRef.current.nextElementSibling.style.visibility = "hidden";
    inputRef.current.classList.remove("error-quantity");
    dispatch(setTicketNoSeats({ count: Number(event.target.value) }));
  };
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
                onClick={() =>
                  item.type !== "child-no-seats"
                    ? onClickSelected(item.type)
                    : null
                }
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
                    type="number"
                    className={
                      className + " " + item.type + " input form-control"
                    }
                    id="exampleInputTypeTickets"
                    aria-describedby="typeTickets"
                    defaultValue={item.count}
                    onChange={(event) =>
                      item.type === "child-no-seats"
                        ? onChangeInput(event)
                        : null
                    }
                  />
                </div>{" "}
                {item.type === "child-no-seats" ? (
                  <Tooltip
                    name="quantity-tickets"
                    text="*Количество билетов без места не должно превышать количество взрослых билетов"
                  />
                ) : (
                  <label
                    htmlFor={"exampleInputTypeTickets"}
                    className={className + " " + item.type + "_input-label"}
                  >
                    {templateText(item)}
                  </label>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default QuantityTickets;
