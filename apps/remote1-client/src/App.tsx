import React from "react";
import ReactDOM from "react-dom";
import CountryCard from "./country-card";

import "./index.css";

const App = () => (
  <div className="container">
    <div style={{ color: "red " }}>Name: remote1-client</div>
    <h5> Testing Counry Card component {"<CountryCard/>"} </h5>
    <CountryCard name={"Test"} region={"Test"} flag={"https://flagcdn.com/w320/aq.png"} />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
