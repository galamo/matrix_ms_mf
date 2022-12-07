import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import CountryPage from "./country-page";
import LoginPage from "./login-page"
import { BrowserRouter, Navigate, Route, Routes, Link } from "react-router-dom"
import css from "./style.module.css"
import "./index.css";

const LoginPageLazy = React.lazy(() => import("./login-page"))
const CountryPageLazy = React.lazy(() => import("./country-page"))


const App = () => (
  <BrowserRouter>
    <div className="container">
      <h1> Main Application </h1>
      <div style={{ margin: "auto", display: "inline-block", width: "100%", textAlign: "center" }}>
        <button className={css.buttonStyle} > <Link to="/"> Login </Link> </button>
        <button className={css.buttonStyle} > <Link to="/countries"> Countries </Link> </button>
      </div>
      <Suspense fallback={<h1>Loading....</h1>}>
        <Routes>
          <Route key={"login"} element={<LoginPageLazy />} path="/" />
          <Route key={"countryPage"} element={<CountryPageLazy />} path="/countries" />
        </Routes>
      </Suspense>
    </div>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
