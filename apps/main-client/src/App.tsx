import React from "react";
import ReactDOM from "react-dom";
import CountryPage from "./country-page";

import "./index.css";

const App = () => (
  <div className="container">
    <h1> Main Application </h1>
    <CountryPage />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
