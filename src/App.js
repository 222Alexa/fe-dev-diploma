import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import HomePage from "./components/Pages/HomePage";
import SelectionTrain from "./components/Pages/SelectionTrain";
import SelectionWagons from "./components/Pages/SelectionWagons";
import PassengersInfo from "./components/Pages/PassengersInfo";
import PersonalData from "./components/Pages/PersonalData";
import Screening from "./components/Pages/Screening";
import OrderResult from "./components/Pages/OrderResult";
import NotFound from "./components/Pages/NotFound";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/fe-dev-diploma/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="trains" element={<SelectionTrain />} />
          <Route path="trains/:id" element={<SelectionWagons />} />
          <Route path="trains/:id/passengers" element={<PassengersInfo />} />
          <Route path="personal_information" element={<PersonalData />} />
          <Route path="screening" element={<Screening />} />
          <Route path="order-result" element={<OrderResult/>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
/** <Route path="/" element={<MainForm className={"homepage_form"} />}> */