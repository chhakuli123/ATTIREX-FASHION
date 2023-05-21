import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {
  FilterContextProvider,
  ProductsDataProvider,
  WishlistContextProvider,
} from "context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductsDataProvider>
        <FilterContextProvider>
          <WishlistContextProvider>
            <App />
          </WishlistContextProvider>
        </FilterContextProvider>
      </ProductsDataProvider>
    </Router>
    <ToastContainer position="bottom-right" autoClose={800} draggable />
  </React.StrictMode>,
  document.getElementById("root")
);
