import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import {Provider} from '@reduxjs/toolkit'

import App from "./App";
import store from "./redux/store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store = {store}>
  {/* <React.StrictMode> */}
    <App />
  {/* </React.StrictMode> */}
  </Provider>
  ,rootElement
);
