import React from "react";
import "./index.css";
import App from "./App";
/* import ReactDOM from "react-dom"; */
/* Para evitar que aparezca el error de 'Deprecated React Version 17', importamos la nueva forma de mostrar el root */
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  // TODO : Me falta agregar el BrowserRouter
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
