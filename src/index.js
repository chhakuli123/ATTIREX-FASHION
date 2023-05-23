import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// Context Providers
import {
  CartContextProvider,
  FilterContextProvider,
  ProductsDataProvider,
  WishlistContextProvider,
} from "context";

// CSS Styles
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

// App Component and Server
import App from "./App";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductsDataProvider>
        <FilterContextProvider>
          <WishlistContextProvider>
            <CartContextProvider>
              <App />
            </CartContextProvider>
          </WishlistContextProvider>
        </FilterContextProvider>
      </ProductsDataProvider>
    </Router>
    <ToastContainer position="bottom-right" autoClose={800} draggable />
  </React.StrictMode>,
  document.getElementById("root")
);
