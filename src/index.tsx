import './index.css';
import React from "react";
import ReactDOM from "react-dom/client"; // <- Changement ici
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
