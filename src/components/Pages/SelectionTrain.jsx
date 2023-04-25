import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../Molecules/Banner";
import banner3 from "../../img/banner/banner3.png";
import MainForm from "../Forms/MainForm";

import SideBar from "../SideBar/SideBar";
import ProgressBar from "../Molecules/ProgressBar";
import Loader from "../Molecules/Loader";
import SearchControls from "../Main/SelectionTrain/SearchControls";
import PaginatedItems from "../Molecules/ReactPaginate";
import { setParameters } from "../../features/catalogTrainsSlice";
import Info from "../Molecules/Info";
import { useGetTrainsListQuery } from "../../features/myApi";
import "../Main/SelectionTrain/selectionTrain.css";

const SelectionTrain = () => {
  const { travelData, parameters, trainsParameters } = useSelector(
    (state) => state.catalogTrains.searchData
  );

  const dispatch = useDispatch();
  const {
    data = [],
    isLoading,
    isFetching,
    isError,
  } = useGetTrainsListQuery({ travelData, parameters, trainsParameters });
  let cardInfo = document.querySelector(".info_card");
  useEffect(() => {
    if (!data.length && cardInfo) cardInfo.classList.add("active");
  }, [data, cardInfo]);
  const onClickSorted = (event) => {
    event.preventDefault();
    let type;
    if (event.target.textContent === "времени") type = "date";
    if (event.target.textContent === "стоимости") type = "min_price";
    if (event.target.textContent === "длительности") type = "duration";

    dispatch(setParameters({ sort: { type, text: event.target.textContent } }));
  };

  const onClickLimit = (event) => {
    event.preventDefault();

    dispatch(setParameters({ limit: event.target.textContent, offset: 0 }));
  };
  const onClickInfo = () => {
    document.querySelector(".info_card").classList.remove("active");
  };
  return (
    <React.Fragment>
      <Banner className="banner banner-tickets" banner={banner3} />
      <div className="selection-train_wrapper">
        <MainForm className="search-tickets_form" />
        <div className="selection-train_content">
          {isLoading && <Loader />}
          {isError &&  <Info
                  type={"error"}
                  text={"Что-то пошло не так..."}
                  onClick={onClickInfo}
                />}
            
          {!isLoading && <ProgressBar />}
          {!isLoading && <SideBar />}
          {!isLoading && !isError && data.items ? (
            <section className="trains-menu-wrap d-flex" id="trains-menu">
              <SearchControls
                amount={data.total_count}
                sort={parameters.sort}
                limit={Number(parameters.limit)}
                onClickSorted={onClickSorted}
                onClickLimit={onClickLimit}
              />
              {data.items.length > 0 ? (
                <PaginatedItems
                  itemsPerPage={parameters.limit}
                  items={[...Array(data.total_count).keys()]}
                  listItems={data.items}
                />
              ) : (
                <Info
                  type={"info"}
                  text={"По вашему запросу ничего не найдено"}
                  onClick={onClickInfo}
                />
              )}
            </section>
          ) : (
            <Info
              type={"error info"}
              text={"Поля откуда и куда обязательны для заполнения"}
              onClick={onClickInfo}
            />
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default SelectionTrain;
