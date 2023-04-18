import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Title } from "../Atoms/Atoms";
import Banner from "../Molecules/Banner";
import banner3 from "../../img/banner/banner3.png";
import MainForm from "../Forms/MainForm";

import SideBar from "../SideBar/SideBar";
import ProgressBar from "../Molecules/ProgressBar";
import Loader from "../Molecules/Loader";

import TrailDetails from "../Main/SelectionWagons/TrailDetails";
import QuantityTickets from "../Main/SelectionWagons/QuantityTickets";
import WagonsTypesBlock from "../Main/SelectionWagons/WagonsTypesBlock";
import SeatsDetails from "../Main/SelectionWagons/SeatsDetails";
import { findWagon } from "../../utils/trainSelectionUtils";
import { addSeats, clearDataSeats } from "../../features/passengersSlice";

import { useGetTrainIdQuery } from "../../features/myApi";
import "../Main/SelectionWagons/selectionWagons.css";

const SelectionWagons = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedTypeWagon, setSelectedTypeWagon] = useState(null);
  const [selectedTypeTicket, setSelectedTypeTicket] = useState({
    type: "adult",
  });

  const { id, seletedTrain } = useSelector((state) => state.catalogTrains);
  const { data = [], /*isError,*/ isLoading } = useGetTrainIdQuery(id);
  const dataSeats = useSelector((state) => state.passengers.dataSeats);

  const selectedSeats = { type: selectedTypeTicket.type, seats: null };
  useEffect(() => {
    
    dispatch(clearDataSeats());
  }, [selectedTypeWagon, dispatch]);


  const clickSelectedSeats = (event, selectedTypeTicket) => {
    selectedSeats.seats = Number(event.target.dataset.id);

    dispatch(addSeats({ data: selectedSeats, price: event.target.dataset.price}));
    event.target.classList.toggle("utils-wagon_button_selected");

  };



  const details = {
    duration: seletedTrain.duration,
    from: {
      name: seletedTrain.from.city.name,
      datetime: seletedTrain.from.datetime,
      railway_station_name: seletedTrain.from.railway_station_name,
    },
    to: {
      name: seletedTrain.to.city.name,
      datetime: seletedTrain.to.datetime,
      railway_station_name: seletedTrain.to.railway_station_name,
    },
  };


  return (
    <React.Fragment>
      <Banner className="banner banner-tickets" banner={banner3} />

      <div className="selection-wagons_wrapper">
        <MainForm className="search-tickets_form" />
        <div className="selection-wagon-content">
          {isLoading ? <Loader /> : null}
          {!isLoading && <ProgressBar />}
          {!isLoading && <SideBar />}
          {data && (
            <section className="selection-wagon_Block">
              <Title className={"selection-wagon_title"} text="Выбор мест" />
              <TrailDetails className="selection-wagon" data={details} />

              <QuantityTickets
                className="quantity-tickets"
                data={dataSeats}
                selected={selectedTypeTicket}
                setSelected={setSelectedTypeTicket}
              />
              <WagonsTypesBlock
                className="wagons-type"
                selectedType={selectedTypeWagon}
                setSelectedType={setSelectedTypeWagon}
              />
              {selectedTypeWagon ? (
                <SeatsDetails
                  className="available-seats-details"
                  data={findWagon(data, selectedTypeWagon)}
                  selectedTypeTicket={selectedTypeTicket}
                  onClick={(event) => clickSelectedSeats(event)}
                />
              ) : null}
              <div className="selection-wagon-content_control">
                <Button
                  text="Далее"
                  type="next-block"
                  onClick={() => navigate("passengers")}
                ></Button>
              </div>
            </section>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default SelectionWagons;