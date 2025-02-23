import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Heading from "./components/Heading/Heading";
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Heading />
        <App />
    </React.StrictMode>
);
