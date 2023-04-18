import React from "react";
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

import { useGetTrainsListQuery } from "../../features/myApi";
import "../Main/SelectionTrain/selectionTrain.css";

const SelectionTrain = () => {
  const { travelData, parameters } = useSelector(
    (state) => state.catalogTrains.searchData
  );

  const dispatch = useDispatch();
  const {
    data = [],
    isLoading,
    isError,
  } = useGetTrainsListQuery({ travelData, parameters });

  const onClickSorted = (event) => {
    event.preventDefault();
    let type;
    if (event.target.textContent === "времени") type = "date";
    if (event.target.textContent === "стоимости") type = "min_price";
    if (event.target.textContent === "длительности") type = "duration";

    dispatch(setParameters({ sort: { type, text: event.target.textContent } }));
  };
  console.log(data, 'selectionTrain')
  const onClickLimit = (event) => {
    event.preventDefault();

    dispatch(setParameters({ limit: event.target.textContent, offset: 0 }));
  };

  return (
    <React.Fragment>
      <Banner className="banner banner-tickets" banner={banner3} />
      <div className="selection-train_wrapper">
        <MainForm className="search-tickets_form" />
        <div className="selection-train_content">
          {isLoading ? <Loader /> : null}
          {!isLoading && <ProgressBar />}
          {!isLoading && <SideBar />}
          {!isLoading && !isError && data.items && (
            <section className="trains-menu-wrap d-flex" id="trains-menu">
              <SearchControls
                amount={data.total_count}
                sort={parameters.sort}
                limit={Number(parameters.limit)}
                onClickSorted={onClickSorted}
                onClickLimit={onClickLimit}
              />
              <PaginatedItems
                itemsPerPage={parameters.limit}
                items={[...Array(data.total_count).keys()]}
                listItems={data.items}
              />
            </section>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default SelectionTrain;
