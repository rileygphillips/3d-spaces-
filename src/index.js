import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Spaces } from "./components/3dSpaces";
import { BrowserRouter } from "react-router-dom";
import Header from "./Logo";

ReactDOM.render(
  <React.StrictMode>
    <main className="main">
      <BrowserRouter>
        <div className="header"><Header /> </div>
        <Spaces />
      </BrowserRouter>
    </main>
  </React.StrictMode>,
  document.getElementById("root")
);
