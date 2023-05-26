import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

// Context Providers
import {
  AuthProvider,
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
      <AuthProvider>
        <ProductsDataProvider>
          <FilterContextProvider>
            <WishlistContextProvider>
              <CartContextProvider>
                <App />
              </CartContextProvider>
            </WishlistContextProvider>
          </FilterContextProvider>
        </ProductsDataProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
