import React from "react";
import ReactDOM from "react-dom/client";
import "./index.module.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import FirebaseData from "./service/fb_data";

const fbData = new FirebaseData();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App fbData={fbData} />);

reportWebVitals();
