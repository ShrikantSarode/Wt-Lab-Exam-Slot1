import React from "react";
import Header from "./Components/Header";
import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import Addarticle from "./Components/Addarticle";
import Updatearticle from "./Components/Updatearticle";
import Showarticles from "./Components/Showarticles";

const projectroute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/header",
        element: <Header />,
      },
      {
        path: "/addArticles",
        element: <Addarticle />,
      },
      {
        path: "/updateArticles",
        element: <Updatearticle />,
      },
      {
        path: "/showArticles",
        element: <Showarticles />,
      },
    ],
  },
]);
export default projectroute;
