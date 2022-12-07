import React from "react";
import ReactDOM from "react-dom";
import CountryPage from "./country-page";
import LoginPage from "./login-page"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import "./index.css";



const App = () => (
  <BrowserRouter>
    <div className="container">
      <h1> Main Application </h1>
      <Routes>
        <Route key={"login"} element={<LoginPage />} path="/" />
        <Route key={"countryPage"} element={<CountryPage />} path="/countries" />
      </Routes>
    </div>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
