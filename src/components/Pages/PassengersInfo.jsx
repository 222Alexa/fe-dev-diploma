import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deletePassenger } from "../../features/passengersSlice";
import Banner from "../Molecules/Banner";
import banner3 from "../../img/banner/banner3.png";
import MainForm from "../Forms/MainForm";

import SideBar from "../SideBar/SideBar";
import ProgressBar from "../Molecules/ProgressBar";
import AddPassenger from "../Main/Passengers/AddPassengerBlock";

import BlockItem from "../Main/Passengers/BlockItem";
import { Button } from "../Atoms/Atoms";
import "../Main/Passengers/passengersInfo.css";

const PassengersInfo = () => {
  const { loading, /*error*/ } = useSelector((state) => state.catalogTrains);
  const { passengers } = useSelector((state) => state.passengers);
  const navigate = useNavigate();
  const [count, setCount] = useState(Array(passengers.length).fill().map((e, i) => i + 1)); //это здесь пока запросов нет

  const cardRef = useRef();
  const dispatch = useDispatch();
  let showInfo = true;
  
useEffect(() => {
    if (passengers.length === 0) {
      setCount([1,2]);
    }
  }, [passengers]);
  const clickHandler = (event) => {
    cardRef.current = event.target.parentElement.nextSibling;
    cardRef.current.classList.toggle("active-show");
    cardRef.current.classList.contains("active-show")
      ? event.target.classList.add("expand-button")
      : event.target.classList.remove("expand-button");
  };

  /* Переписать для объекта и вынести в utils
  +эффект для корректного отображения порядка
  */
  const updateCounter = (arr, id) => {
    const newArr = arr.filter((o) => o !== id);
    return newArr.map((item, idx) => {
      const elem = idx + 1;
      return elem;
    });
  };

  const clickDelete = (id) => {
    console.log(id, count, "id");

    dispatch(deletePassenger({ id: id }));
    const state = updateCounter(count, id);
    setCount(state);
  };

  return (
    <React.Fragment>
      <Banner className="banner banner-tickets" banner={banner3} />
      <div className="passengers-info_wrapper">
        <MainForm className="search-tickets_form" />
        <div className="passengers-info_content">
          {!loading && <ProgressBar />}
          {!loading && <SideBar />}
          <section className="passengers-info_block" ref={cardRef}>
            {count.length > 0
              ? count.map((item) => (
                  <BlockItem
                    key={item}
                    id={item}
                    clickHandler={clickHandler}
                    clickDelete={clickDelete}
                    showInfo={showInfo}
                  />
                ))
              : null}
            <AddPassenger state={count} setState={setCount} />
            <div className="passengers-info_section_control">
              <Button
                text="Далее"
                type={passengers.length ? "next-block" : " disabled next-block"}
                disabled={!passengers.length ? true : false}
                onClick={() =>
                  navigate("/fe-dev-diploma/personal_information")
                }
              ></Button>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PassengersInfo;

