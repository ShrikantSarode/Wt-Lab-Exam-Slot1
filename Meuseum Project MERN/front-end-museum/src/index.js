import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import { RouterProvider } from "react-router-dom";
import projectroute from "./projectRouter";
import "./css/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={projectroute} />);
