import React from "react";
import { useSelector } from "react-redux";
import { getDisabled } from "../../../utils/WagonSelectionUtils";
const WagonThirdClass = ({ data, selectedTypeTicket, onClick }) => {
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

  return (
    <React.Fragment>
      <div className="wagon_item wagon-third_class">
        <div className="wagon_template-block">
          <span className="template-text">
            11 человек выбирают места в этом поезде
          </span>
        </div>
        <div className="utils-wagon_wrap wagon-third_class_wrap">
          <div className="utils-wagon_sector">
            <div className="utils-wagon_box">
              <div className="utils-wagon_buttons-block_box">
                <button
                  data-price={data.coach.top_price}
                  data-id={2}
                  className={
                    "utils-wagon_button_box" + getClassName(2, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    2,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  2
                </button>
                <button
                  data-id={1}
                  data-price={data.coach.bottom_price}
                  className={
                    "utils-wagon_button_box" + getClassName(1, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    1,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  1
                </button>
              </div>
              <div className="utils-wagon_buttons-block_box">
                <button
                  data-id={4}
                  data-price={data.coach.top_price}
                  className={
                    "utils-wagon_button_box" + getClassName(4, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    4,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  4
                </button>
                <button
                  data-id={3}
                  data-price={data.coach.bottom_price}
                  className={
                    "utils-wagon_button_box" + getClassName(3, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    3,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  3
                </button>
              </div>
            </div>
            <div className="utils-wagon_side">
              <div className="utils-wagon_buttons-block_side">
                <button
                  data-id={33}
                  data-price={data.coach.side_price}
                  className={
                    "utils-wagon_button_side" + getClassName(33, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    33,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  33
                </button>
                <button
                  data-id={34}
                  data-price={data.coach.side_price}
                  className={
                    "utils-wagon_button_side" + getClassName(34, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    34,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  34
                </button>
              </div>
            </div>
          </div>
          <div className="utils-wagon_sector">
            <div className="utils-wagon_box">
              <div div className="utils-wagon_buttons-block_box">
                <button
                  data-id={6}
                  data-price={data.coach.top_price}
                  className={
                    "utils-wagon_button_box" + getClassName(6, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    6,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  6
                </button>
                <button
                  data-id={5}
                  data-price={data.coach.bottom_price}
                  className={
                    "utils-wagon_button_box" + getClassName(5, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    5,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  5
                </button>
              </div>
              <div className="utils-wagon_buttons-block_box">
                <button
                  data-id={8}
                  data-price={data.coach.top_price}
                  className={
                    "utils-wagon_button_box" + getClassName(8, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    8,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  8
                </button>
                <button
                  data-id={7}
                  data-price={data.coach.bottom_price}
                  className={
                    "utils-wagon_button_box" + getClassName(7, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    7,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  7
                </button>
              </div>
            </div>
            <div className="utils-wagon_side">
              <div className="utils-wagon_buttons-block_side">
                <button
                  data-id={35}
                  data-price={data.coach.side_price}
                  className={
                    "utils-wagon_button_side" + getClassName(35, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    35,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  35
                </button>
                <button
                  data-id={36}
                  data-price={data.coach.side_price}
                  className={
                    "utils-wagon_button_side" + getClassName(36, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    36,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  36
                </button>
              </div>
            </div>
          </div>
          <div className="utils-wagon_sector">
            <div className="utils-wagon_box">
              <div className="utils-wagon_buttons-block_box">
                <button
                  data-id={10}
                  data-price={data.coach.top_price}
                  className={
                    "utils-wagon_button_box" + getClassName(10, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    10,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  10
                </button>
                <button
                  data-id={9}
                  data-price={data.coach.bottom_price}
                  className={
                    "utils-wagon_button_box" + getClassName(9, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    9,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  9
                </button>
              </div>
              <div className="utils-wagon_buttons-block_box">
                <button
                  data-id={12}
                  data-price={data.coach.top_price}
                  className={
                    "utils-wagon_button_box" + getClassName(12, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    12,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  12
                </button>
                <button
                  data-id={11}
                  data-price={data.coach.bottom_price}
                  className={
                    "utils-wagon_button_box" + getClassName(11, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    11,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  11
                </button>
              </div>
            </div>
            <div className="utils-wagon_side">
              <div className="utils-wagon_buttons-block_side">
                <button
                  data-id={37}
                  data-price={data.coach.side_price}
                  className={
                    "utils-wagon_button_side" + getClassName(37, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    37,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  37
                </button>
                <button
                  data-id={38}
                  data-price={data.coach.side_price}
                  className={
                    "utils-wagon_button_side" + getClassName(38, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    38,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  38
                </button>
              </div>
            </div>
          </div>
          <div className="utils-wagon_sector">
            <div className="utils-wagon_box">
              <div className="utils-wagon_buttons-block_box">
                <button
                  data-id={14}
                  data-price={data.coach.top_price}
                  className={
                    "utils-wagon_button_box" + getClassName(14, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    14,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  14
                </button>
                <button
                  data-id={13}
                  data-price={data.coach.bottom_price}
                  className={
                    "utils-wagon_button_box" + getClassName(13, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    13,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  13
                </button>
              </div>
              <div className="utils-wagon_buttons-block_box">
                <button
                  data-id={16}
                  data-price={data.coach.top_price}
                  className={
                    "utils-wagon_button_box" + getClassName(16, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    16,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  16
                </button>
                <button
                  data-id={15}
                  data-price={data.coach.bottom_price}
                  className={
                    "utils-wagon_button_box" + getClassName(15, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    15,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  15
                </button>
              </div>
            </div>
            <div className="utils-wagon_side">
              <div className="utils-wagon_buttons-block_side">
                <button
                  data-id={39}
                  data-price={data.coach.side_price}
                  className={
                    "utils-wagon_button_side" + getClassName(39, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    39,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  39
                </button>
                <button
                  data-id={40}
                  data-price={data.coach.side_price}
                  className={
                    "utils-wagon_button_side" + getClassName(40, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    40,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  40
                </button>
              </div>
            </div>
          </div>
          <div className="utils-wagon_sector">
            <div className="utils-wagon_box">
              <div className="utils-wagon_buttons-block_box">
                <button
                  data-id={18}
                  data-price={data.coach.top_price}
                  className={
                    "utils-wagon_button_box" + getClassName(18, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    18,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  18
                </button>
                <button
                  data-id={17}
                  data-price={data.coach.bottom_price}
                  className={
                    "utils-wagon_button_box" + getClassName(17, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    17,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  17
                </button>
              </div>
              <div className="utils-wagon_buttons-block_box">
                <button
                  data-id={20}
                  data-price={data.coach.top_price}
                  className={
                    "utils-wagon_button_box" + getClassName(20, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    20,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  20
                </button>
                <button
                  data-id={19}
                  data-price={data.coach.bottom_price}
                  className={
                    "utils-wagon_button_box" + getClassName(19, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    19,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  19
                </button>
              </div>
            </div>
            <div className="utils-wagon_side">
              <div className="utils-wagon_buttons-block_side">
                <button
                  data-id={41}
                  data-price={data.coach.side_price}
                  className={
                    "utils-wagon_button_side" + getClassName(41, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    41,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  41
                </button>
                <button
                  data-id={42}
                  data-price={data.coach.side_price}
                  className={
                    "utils-wagon_button_side" + getClassName(42, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    42,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  42
                </button>
              </div>
            </div>
          </div>
          <div className="utils-wagon_sector">
            <div className="utils-wagon_box">
              <div className="utils-wagon_buttons-block_box">
                <button
                  data-id={22}
                  data-price={data.coach.top_price}
                  className={
                    "utils-wagon_button_box" + getClassName(22, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    22,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  22
                </button>
                <button
                  data-id={21}
                  data-price={data.coach.bottom_price}
                  className={
                    "utils-wagon_button_box" + getClassName(21, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    21,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  21
                </button>
              </div>
              <div className="utils-wagon_buttons-block_box">
                <button
                  data-id={24}
                  data-price={data.coach.top_price}
                  className={
                    "utils-wagon_button_box" + getClassName(24, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    24,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  24
                </button>
                <button
                  data-id={23}
                  data-price={data.coach.bottom_price}
                  className={
                    "utils-wagon_button_box" + getClassName(23, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    23,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  23
                </button>
              </div>
            </div>
            <div className="utils-wagon_side">
              <div className="utils-wagon_buttons-block_side">
                <button
                  data-id={43}
                  data-price={data.coach.side_price}
                  className={
                    "utils-wagon_button_side" + getClassName(43, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    43,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  43
                </button>
                <button
                  data-id={44}
                  data-price={data.coach.side_price}
                  className={
                    "utils-wagon_button_side" + getClassName(44, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    44,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  44
                </button>
              </div>
            </div>
          </div>
          <div className="utils-wagon_sector">
            <div className="utils-wagon_box">
              <div className="utils-wagon_buttons-block_box">
                <button
                  data-id={26}
                  data-price={data.coach.top_price}
                  className={
                    "utils-wagon_button_box" + getClassName(26, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    26,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  26
                </button>
                <button
                  data-id={25}
                  data-price={data.coach.bottom_price}
                  className={
                    "utils-wagon_button_box" + getClassName(25, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    25,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  25
                </button>
              </div>
              <div className="utils-wagon_buttons-block_box">
                <button
                  data-id={28}
                  data-price={data.coach.top_price}
                  className={
                    "utils-wagon_button_box" + getClassName(28, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    28,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  28
                </button>
                <button
                  data-id={27}
                  data-price={data.coach.bottom_price}
                  className={
                    "utils-wagon_button_box" + getClassName(27, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    27,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  27
                </button>
              </div>
            </div>
            <div className="utils-wagon_side">
              <div className="utils-wagon_buttons-block_side">
                <button
                  data-id={45}
                  data-price={data.coach.side_price}
                  disabled={getDisabled(
                    45,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                  className={
                    "utils-wagon_button_side" + getClassName(45, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                >
                  45
                </button>
                <button
                  data-id={46}
                  data-price={data.coach.side_price}
                  className={
                    "utils-wagon_button_side" + getClassName(46, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    46,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  46
                </button>
              </div>
            </div>
          </div>
          <div className="utils-wagon_sector">
            <div className="utils-wagon_box">
              <div className="utils-wagon_buttons-block_box">
                <button
                  data-id={30}
                  data-price={data.coach.top_price}
                  className={
                    "utils-wagon_button_box" + getClassName(30, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    30,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  30
                </button>
                <button
                  data-id={29}
                  data-price={data.coach.bottom_price}
                  className={
                    "utils-wagon_button_box" + getClassName(29, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    29,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  29
                </button>
              </div>
              <div className="utils-wagon_buttons-block_box">
                <button
                  data-id={32}
                  data-price={data.coach.top_price}
                  className={
                    "utils-wagon_button_box" + getClassName(32, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    32,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  32
                </button>
                <button
                  data-id={31}
                  data-price={data.coach.bottom_price}
                  className={
                    "utils-wagon_button_box" + getClassName(31, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    31,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  31
                </button>
              </div>
            </div>
            <div className="utils-wagon_side">
              <div className="utils-wagon_buttons-block_side">
                <button
                  data-id={47}
                  data-price={data.coach.side_price}
                  className={
                    "utils-wagon_button_side" + getClassName(47, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    47,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  47
                </button>
                <button
                  data-id={48}
                  data-price={data.coach.side_price}
                  className={
                    "utils-wagon_button_side" + getClassName(48, data.seats)
                  }
                  onClick={(event) => onClick(event, selectedTypeTicket)}
                  disabled={getDisabled(
                    48,
                    data.seats,
                    dataSeats,
                    selectedTypeTicket
                  )}
                >
                  48
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default WagonThirdClass;
