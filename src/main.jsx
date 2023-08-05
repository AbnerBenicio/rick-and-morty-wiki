import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Locations from "./components/Locations.jsx";
import ErrorPage from "./components/ErroPage.jsx";

import Characters from "./components/Characters.jsx";
import Home from "./components/Home.jsx"
import About from "./components/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [{
      path: "/",
      element:<Home />
    }, {
      path: "/about",
      element: <About />
    }, {
      path: "character/:pag",
      element: <Characters />,
      errorElement: <ErrorPage />,
    }, {
      path: "location/:pag",
      element: <Locations />,
      errorElement: <ErrorPage />,
    },]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
