import React from "react";
import ReactDOM from "react-dom";
//import {HashRouter as Router } from "react-router-dom";
import {BrowserRouter as Router } from "react-router-dom";
import App from "./Components/App";
import './style.css';
//
ReactDOM.render(<Router><App/></Router>, document.getElementById("root"));