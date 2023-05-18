import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { FilterContextProvider, ProductsDataProvider } from "context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductsDataProvider>
        <FilterContextProvider>
          <App />
        </FilterContextProvider>
      </ProductsDataProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
