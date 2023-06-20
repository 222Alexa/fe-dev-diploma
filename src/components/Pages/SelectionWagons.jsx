import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation, useParams } from "react-router-dom";
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
import Info from "../Molecules/Info";
import { findWagon } from "../../utils/trainSelectionUtils";
import { getValidDataPass } from "../../utils/WagonSelectionUtils";
import { addSeats, setDataPassengers } from "../../features/passengersSlice";
import {
  setTrainId,
  setDataRequest,

} from "../../features/catalogTrainsSlice";

import {
  useGetTrainIdQuery,
//useGetTrainsListQuery
} from "../../features/myApi";
import {
  getDuration,
  parsedUrlString,
  formattedFormData,
} from "../../utils/trainSelectionUtils";

import "../Main/SelectionWagons/selectionWagons.css";


const SelectionWagons = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const params = useParams();
  const [selectedTypeWagon, setSelectedTypeWagon] = useState(null);
  const [selectedTypeTicket, setSelectedTypeTicket] = useState({
    type: "adult",
  });

  const { id, seleсtedTrain } = useSelector((state) => state.catalogTrains);

const { data=[], isError:isErrorId, isLoading:isLoadingId } = useGetTrainIdQuery(params.id);
  const dataSeats = useSelector((state) => state.passengers.dataSeats);
  let upData = parsedUrlString(location.search);
  /**В процессе. .. пока не очень понятно как вызвать в одном компоненте
   * и id и список, если список "потерялся"
   * и лишнего не навертеть
   */

  
  /*const {
    data:dataList,
    isLoading:isLoadingList,

    isError:isErrorList,
  } = useGetTrainsListQuery(
    upData,
    { refetchOnMountOrArgChange: true }
  );*/

  const formData = formattedFormData(upData);

  const selectedSeats = { type: selectedTypeTicket.type, seats: null };
  if (!id) {
    dispatch(setDataRequest({ data: formData }));
    dispatch(setTrainId({ id: params.id }));
  }

  useEffect(() => {
    console.log("errorororor");

    /* dispatch(
      upDateCatalog({
        data: {
          formData,
          trainsParameters: upData.parameters,
          parameters: upData.filter,
        },
      })
    );*/
  }, [seleсtedTrain, selectedTypeWagon, location, dispatch]);
  const onClickInfo = () => {
    document.querySelector(".info_card").classList.remove("active");
  };
  const clickSelectedSeats = (event, selectedTypeTicket) => {
    selectedSeats.seats = Number(event.target.dataset.id);

    selectedSeats.coach_id = event.target.dataset.wagon_id;

    dispatch(
      addSeats({ data: selectedSeats, price: event.target.dataset.price })
    );
    dispatch(
      setDataPassengers({
        data: {
          coach_id: event.target.dataset.wagon_id,
          seat: selectedSeats,
          price: event.target.dataset.price,
        },
      })
    );
    event.target.classList.toggle("utils-wagon_button_selected");
  };

  const details = {
    duration: getDuration(
      seleсtedTrain.to.datetime,
      seleсtedTrain.from.datetime
    ),
    from: {
      name: seleсtedTrain.from.city.name,
      datetime: seleсtedTrain.from.datetime * 1000,
      railway_station_name: seleсtedTrain.from.railway_station_name,
    },
    to: {
      name: seleсtedTrain.to.city.name,
      datetime: seleсtedTrain.to.datetime * 1000,
      railway_station_name: seleсtedTrain.to.railway_station_name,
    },
  };
  const isValidSeats = getValidDataPass(dataSeats);
  const onChangeInput = (event) => {
    console.log(event, 11);
  };
  return (
    <React.Fragment>
      <Banner className="banner banner-tickets" banner={banner3} />

      <div className="selection-wagons_wrapper">
        <MainForm className="search-tickets_form" />
        <div className="selection-wagon-content">
          {isLoadingId ? <Loader /> : null}
          {isErrorId && (
            <Info
              type={"error"}
              text={"Что-то пошло не так..."}
              onClick={onClickInfo}
            />
          )}
          {!isLoadingId && <ProgressBar />}
          {!isLoadingId && <SideBar />}
          {!isLoadingId && data && (
            <section className="selection-wagon_Block">
              <Title className={"selection-wagon_title"} text="Выбор мест" />
              {id!=='' && (
                <TrailDetails className="selection-wagon" data={details} />
              )}

              <QuantityTickets
                className="quantity-tickets"
                data={dataSeats}
                selected={selectedTypeTicket}
                setSelected={setSelectedTypeTicket}
                onChangeInput={onChangeInput}
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
                  disabled={isValidSeats.length ? false : true}
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
