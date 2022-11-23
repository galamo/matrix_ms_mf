import React from "react";
import ReactDOM from "react-dom";
import MainApp from "./MainApp";
import "./index.css";

const App = () => (
  <div className="container">
    <div>Local MS : Component loaded locally</div>
    <MainApp />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
