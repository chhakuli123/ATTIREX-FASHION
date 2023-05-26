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
import {
  Footer,
  LoginForm,
  Navbar,
  PrivateRoute,
  SignupForm,
  UserProfile,
} from "components";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
          style: {
            fontSize: "1.2rem",
            fontWeight: "bold",
            background: "rgba(0, 0, 0, 0.8)", // Adjust the background color to make it more visible
            color: "#fff", // Set the text color to white
          },
        }}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route
          path="/productDetails/:productId"
          element={<ProductDetailsPage />}
        />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />

        <Route path="/" element={<PrivateRoute />}>
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
