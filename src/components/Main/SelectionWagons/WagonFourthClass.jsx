import React from "react";
import { useSelector } from "react-redux";
import { getDisabled } from "../../../utils/WagonSelectionUtils";
import { nanoid } from "nanoid";
const WagonFourthClass = ({ data, selectedTypeTicket, onClick }) => {
  const dataSeats = useSelector((state) => state.passengers.dataSeats);

  const getClassName = (num, dataBase) => {
    const item = dataBase.find((item) => {
      return item.index === Number(num) && item.available === true;
    });

    let className;

    if (item) {
      const arrSeats = dataSeats[0].seats.concat(dataSeats[1].seats);

      return arrSeats.includes(item.index)
        ? (className = " utils-wagon_button_selected")
        : (className = "");
    } else {
      className = " occupied_seat";
    }
    return className;
  };

  const seatsBtnsArr = Array.from({ length: 62 }, (_, index) => index + 1);
  let sector2 = seatsBtnsArr.splice(32, 31);
  let sector1 = seatsBtnsArr;
  const isEvenNumber = (arr) => {
    let evenArr = [];
    let oddArr = [];
  arr.map((item) => {
    return  item !== 62 && item % 2 === 0 ? evenArr.push(item) : oddArr.push(item);
    });
    return { evenArr, oddArr };
  };

  const sideRight = isEvenNumber(sector1);
  const sideLeft = isEvenNumber(sector2);



  return (
    <React.Fragment>
      <div className="wagon_item wagon-fourth_class">
        <div className="wagon_template-block">
          <span className="template-text">
            11 человек выбирают места в этом поезде
          </span>
        </div>
        <div className="utils-wagon_wrap wagon-fourth_class_wrap">
          <div className="utils-wagon-wagon-fourth_class_sector">
            <div className="utils-wagon-wagon-fourth_class_sector-row">
              {sideRight.evenArr.map((item) => {
                return (
                  <button
                  key={nanoid()}
                    data-id={item}
                    data-wagon_id={data.coach._id}
                    data-price={data.coach.bottom_price}
                    className={
                      "utils-wagon_button_box wagon-fourth_class_seat-btn" + getClassName(item, data.seats)
                    }
                    onClick={(event) => onClick(event, selectedTypeTicket)}
                    disabled={getDisabled(
                      item,
                      data.seats,
                      dataSeats,
                      selectedTypeTicket
                    )}
                  >
                    {item}
                  </button>
                );
              })}
            </div>

            <div className="utils-wagon-wagon-fourth_class_sector-row">
            {sideRight.oddArr.map((item) => {
                return (
                  <button
                    data-id={item}
                    data-wagon_id={data.coach._id}
                    data-price={data.coach.bottom_price}
                    className={
                      "utils-wagon_button_box wagon-fourth_class_seat-btn" + getClassName(item, data.seats)
                    }
                    onClick={(event) => onClick(event, selectedTypeTicket)}
                    disabled={getDisabled(
                      item,
                      data.seats,
                      dataSeats,
                      selectedTypeTicket
                    )}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="utils-wagon-wagon-fourth_class_sector">
            <div className="utils-wagon-wagon-fourth_class_sector-row  short-row">
            {sideLeft.evenArr.map((item) => {
                return (
                  <button
                    data-id={item}
                    data-wagon_id={data.coach._id}
                    data-price={data.coach.bottom_price}
                    className={
                      "utils-wagon_button_box wagon-fourth_class_seat-btn" + getClassName(item, data.seats)
                    }
                    onClick={(event) => onClick(event, selectedTypeTicket)}
                    disabled={getDisabled(
                      item,
                      data.seats,
                      dataSeats,
                      selectedTypeTicket
                    )}
                  >
                    {item}
                  </button>
                );
              })}
            </div>

            <div className="utils-wagon-wagon-fourth_class_sector-row">
            {sideLeft.oddArr.map((item) => {
                return (
                  <button
                    data-id={item}
                    data-wagon_id={data.coach._id}
                    data-price={data.coach.bottom_price}
                    className={
                      "utils-wagon_button_box wagon-fourth_class_seat-btn" + getClassName(item, data.seats)
                    }
                    onClick={(event) => onClick(event, selectedTypeTicket)}
                    disabled={getDisabled(
                      item,
                      data.seats,
                      dataSeats,
                      selectedTypeTicket
                    )}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default WagonFourthClass;
