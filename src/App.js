import { Routes, Route } from "react-router-dom";

import "./App.css";
import { HomePage } from "pages";
import { Footer, Navbar } from "components";
import ProductsPage from "pages/ProductsPage";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
