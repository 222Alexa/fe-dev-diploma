import React from "react";
import { useLocation, useParams } from "react-router-dom";

import AssistantBlock from "./AssistantBlock";
import OrderDetails from "./OrderDetails";
import LastTickets from "./LastTickets";
import { useGetLastTicketsQuery } from "../../features/myApi";
import "./sidebar.css";

const SideBar = () => {
  const location = useLocation();
  const params = useParams();

  const { data = [] /*isError*/ } = useGetLastTicketsQuery();

  if (
    location.pathname === "/fe-dev-diploma" ||
    location.pathname === "/fe-dev-diploma/order-result"
  ) {
    return;
  }

  const getLocation = () => {
    if (
      location.pathname === "/fe-dev-diploma/trains" ||
      location.pathname === "/fe-dev-diploma/trains/" 
    ) {
      return true;
    } else if (location.pathname === `/fe-dev-diploma/seats/${params.id}`) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <React.Fragment>
      <aside className="sidebar-wrap container p-0">
        <div className="sidebar" id="sidebar">
          {getLocation() ? <AssistantBlock /> : <OrderDetails />}
          {getLocation() && data && data.length > 0 ? (
            <LastTickets data={data.slice(0, 3)} />
          ) : null}
        </div>
      </aside>
    </React.Fragment>
  );
};

export default SideBar;
