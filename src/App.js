import { Routes, Route } from "react-router-dom";

import "./App.css";
import { HomePage, ProductsPage, ProductDetailsPage } from "pages";
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
