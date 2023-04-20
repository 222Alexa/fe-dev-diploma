import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { CardTitle } from "../Atoms/Atoms";
import FormCalendar from "../Molecules/ReactCalendar";
/** searchData: {
      travelData:  */
const FormSideBar = () => {
  const { from, to } = useSelector((state) => state.formTickets.formData);
  
  useEffect(() => {
    console.log(from, to, "effect");
  }, [from, to]);

  return (
    <React.Fragment>
      <div className="form-sidebar-block">
        <div className="form-sidebar-block_departure">
          <CardTitle
            className={"form-sidebar-block_departure"}
            text="Дата поездки"
          />

          <FormCalendar
            className="sidebar_form"
            value={from.date ? new Date(from.date) : null}
          />
        </div>
        <div className="form-sidebar-block_arrival">
          <CardTitle
            className={"form-sidebar-block_arrival"}
            text="Дата возвращения"
          />
          <FormCalendar
            className="sidebar_form"
            value={to.date ? new Date(from.date) : null}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default FormSideBar;
