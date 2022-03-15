import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Spaces } from "./components/3dSpaces";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <main className="main">
      <BrowserRouter>
        <h1 className="header">3D SPACES</h1>
        <Spaces />
      </BrowserRouter>
    </main>
  </React.StrictMode>,
  document.getElementById("root")
);
