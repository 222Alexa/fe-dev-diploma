import React from "react";
import { useSelector } from "react-redux";
import { getDisabled } from "../../../utils/WagonSelectionUtils";
import { nanoid } from "nanoid";

const WagonSecondClass = ({ data, selectedTypeTicket, onClick }) => {
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

  const seatsBtnsArr = Array.from({ length: 18 }, (_, index) => index + 1);
  seatsBtnsArr.splice(1, 1); //удалить 2(не знаю зачем, но на макете его нет)
  seatsBtnsArr.splice(15, 1); //удалить 17(не знаю зачем, но на макете его нет)
  let total = [];

  seatsBtnsArr.map((item, index) => {
    let box = [];
    if (index % 2 === 0) {
      box = [item, seatsBtnsArr[index + 1]];
      total.push(box);
    }
    return item;
  });

  return (
    <React.Fragment>
      <div className="wagon_item wagon-first_class">
        <div className="wagon_template-block">
          <span className="template-text">
            19 человек выбирают места в этом поезде
          </span>
        </div>
        <div className="utils-wagon_wrap wagon-first_class_wrap">
          <div className="utils-wagon-wagon-first_class_sector">
            <div className="utils-wagon-wagon-first_class_sector-row">
              {total.map((item) => {
                return (
                  <div
                    key={nanoid()}
                    className="utils-wagon_buttons-block_box first_class-buttons-block_box"
                  >
                    <button
                      data-id={item[0]}
                      data-wagon_id={data.coach._id}
                      data-price={data.coach.bottom_price}
                      className={
                        "utils-wagon_button_box wagon-first_class_seat-btn" +
                        getClassName(item[0], data.seats)
                      }
                      onClick={(event) => onClick(event, selectedTypeTicket)}
                      disabled={getDisabled(
                        item[0],
                        data.seats,
                        dataSeats,
                        selectedTypeTicket
                      )}
                    >
                      {item[0]}
                    </button>
                    <button
                      data-id={item[1]}
                      data-wagon_id={data.coach._id}
                      data-price={data.coach.bottom_price}
                      className={
                        "utils-wagon_button_box wagon-first_class_seat-btn" +
                        getClassName(item[1], data.seats)
                      }
                      onClick={(event) => onClick(event, selectedTypeTicket)}
                      disabled={getDisabled(
                        item[1],
                        data.seats,
                        dataSeats,
                        selectedTypeTicket
                      )}
                    >
                      {item[1]}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default WagonSecondClass;
