import React, { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "../Atoms/Atoms";
import Banner from "../Molecules/Banner";
import banner3 from "../../img/banner/banner3.png";
import MainForm from "../Forms/MainForm";

import SideBar from "../SideBar/SideBar";
import ProgressBar from "../Molecules/ProgressBar";
import ScreenTrain from "../Main/Screening/ScreenTrain";
import ScreenPassengers from "../Main/Screening/ScreenPassengers";
import ScreenPayment from "../Main/Screening/ScreenPayment";
import { validateDataPassengers } from "../../utils/formsValidator";
import "../Main/Screening/screening.css";

const Screening = () => {
  const { loading } = useSelector((state) => state.catalogTrains);
  const { passengers, contributor } = useSelector((state) => state.passengers);
  const navigate = useNavigate();

  let progress = useCallback(() => {
    console.log(passengers);
    return {};
  }, [passengers]);
  console.log(progress, "progress");
  useEffect(() => {
    progress();
    progress.screening =
      passengers.length > 0 && !validateDataPassengers(contributor)
        ? true
        : false;
  }, [progress, passengers, contributor]);

  const paymentText =
    contributor.payment_method === "cash" ? "Наличными" : "Онлайн";

  return (
    <React.Fragment>
      <Banner className="banner banner-tickets" banner={banner3} />
      <div className="screening_wrapper">
        <MainForm className="search-tickets_form" />
        <div className="screening-content">
          {!loading && <ProgressBar data={progress} />}
          {!loading && <SideBar />}
          <section className="screening">
            <ScreenTrain />
            <ScreenPassengers data={passengers} />
            <ScreenPayment data={paymentText} />
            <div className="screening_block-control">
              <Button
                text="Подтвердить"
                type="next-block"
                onClick={() => navigate("/fe-dev-diploma/order-result")}
              ></Button>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Screening;

/**
 * данные для отправки orders
 * 
 * fetch( 'https://netology-trainbooking.netoservices.ru/order', {
    method: 'POST',
    body: JSON.stringify({
      "user": {
          "first_name": "Иван",
          "last_name": "Смирнов",
          "patronymic": "Олегович",
          "phone": "8900123123",
          "email": "string@string.ru",
          "payment_method": "cash" // или online
        },
        "departure": {
          "route_direction_id": "123431",
          "seats": [
            {
              "coach_id": "12341",
              "person_info": {
                "is_adult": true,
                "first_name": "Ivan",
                "last_name": "Popov",
                "patronymic": "Popovich",
                "gender": true,
                "birthday": "1980-01-01",
                "document_type": "паспорт",
                "document_data": "45 6790195"
              },
              "seat_number": 10,
              "is_child": true,
              "include_children_seat": true
            }
          ]
        }
      })
  })
    .then( response => response.json())
    .then( console.log ); */
