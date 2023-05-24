import { Routes, Route } from "react-router-dom";

import "./App.css";
import {
  HomePage,
  ProductsPage,
  ProductDetailsPage,
  WishlistPage,
  CartPage,
  CheckoutPage,
} from "pages";
import { Footer, Navbar } from "components";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route
          path="/productDetails/:productId"
          element={<ProductDetailsPage />}
        />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
