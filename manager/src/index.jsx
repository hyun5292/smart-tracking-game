import React from "react";
import ReactDOM from "react-dom/client";
import "./index.module.css";
import App from "./App";
import AuthService from "./service/auth_service";
import SchService from "./service/sch_service";

const authService = new AuthService();
const schService = new SchService();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App authService={authService} schService={schService} />);
