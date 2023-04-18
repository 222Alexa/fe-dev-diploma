import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { useGetCityesNameQuery } from "../../features/myApi";

import ControllableStates from "../Molecules/MUI/ControllableStates";
import { LocationOn } from "@mui/icons-material";
import { Title, Button } from "../Atoms/Atoms";
import FormCalendar from "../Molecules/ReactCalendar";
import { capitalizeFirstLetter } from "../../utils/trainSelectionUtils";
import ic_arrow from "../../img/ic_arrow.svg";
import { inputValue } from "../../features/formTicketsSlice";
import { setDataRequest } from "../../features/catalogTrainsSlice";
import { setParameters } from "../../features/catalogTrainsSlice";
//import { setForm } from "../../features/formTicketsSlice";
const MainForm = ({ className }) => {
  const { name } = useSelector((state) => state.formTickets);

  const { from, to } = useSelector((state) => state.formTickets.formData);

  const dispatch = useDispatch();
  const reverseRef = useRef();
  const { data = [], isLoading } = useGetCityesNameQuery(name);
  const navigate = useNavigate();
  const location = useLocation();

  if (isLoading) return <span>Loading...</span>;

  let optionsData = [];
  if (data.length > 0) {
    optionsData = data.map((item) => {
      return { ...item, name: capitalizeFirstLetter(item.name) };
    });
  }
  /*const clickReverse = () => {
    dispatch(
      setForm({
        type: "startCity",
        status: false,
        data: to.city.name,
      })
    );
    dispatch(
      setForm({
        type: "finishCity",
        status: false,
        data: from.city.name,
      })
    );
  };*/
  const clickHandler = () => {
    dispatch(setDataRequest({ data: { from, to } }));
    dispatch(setParameters({ offset: 0 }));
    if (location.pathname !== "/fe-dev-diploma/trains")
      navigate("/fe-dev-diploma/trains");
  };

  const onChangeInput = (event) => {
    if (event.target.value !== "")
      dispatch(inputValue({ name: event.target.value }));
  };

  return (
    <React.Fragment>
      <div className={className}>
        <div className={className + "_destination"}>
          {" "}
          <Title
            className={className + "_departure_title"}
            text="Направление"
          />{" "}
          <div ref={reverseRef} className="form-group group-city-name">
            <ControllableStates
              popupIcon={
                <LocationOn sx={{ color: "#E5E5E5", width: 35, height: 35 }} />
              }
              type="startCity"
              value={from.city.name}
              onChangeInput={onChangeInput}
              placeholder={"Откуда"}
              options={optionsData}
            />
            <button
              type="button"
              className=" btn btn-transparent p-0 form_reverse-button"
              /*onClick={clickReverse}*/
            >
              <img className="ic_arrow_form" src={ic_arrow} alt="arrow icon" />
            </button>
            <ControllableStates
              type="finishCity"
              value={to.city.name}
              popupIcon={
                <LocationOn sx={{ color: "#E5E5E5", width: 35, height: 35 }} />
              }
              onChangeInput={onChangeInput}
              placeholder={"Куда"}
              options={optionsData}
            />
          </div>
        </div>
        <div className={className + "_date-trails"}>
          <Title className={className + "_departure_title"} text="Дата" />
          <div className="form-group group-date-trails">
            <FormCalendar
              className=""
              value={from.date ? new Date(from.date) : null}
              type="startDate"
            />
            <FormCalendar
              className=""
              value={to.date ? new Date(to.date) : null}
              type="finishDate"
            />
          </div>
        </div>
        <div className={className + "_control"}>
          <Button
            text="Найти билеты"
            type="main_form"
            onClick={clickHandler}
            disabled={
              from.city.name === "" || to.city.name === "" ? true : false
            }
          ></Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainForm;
