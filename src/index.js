import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// REACT ROUTER
import { BrowserRouter } from "react-router-dom";

import { FavContextProvider } from "./context/fav-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FavContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavContextProvider>
);
