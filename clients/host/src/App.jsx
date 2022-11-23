import React from "react";
import ReactDOM from "react-dom";
import MainApp from "remote/MainApp"
import "./index.css";

const App = () => (
  <div className="container">
    <MainApp />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
