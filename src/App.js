import { Routes, Route } from "react-router-dom";

import "./App.css";
import { HomePage } from "pages";
import { Footer, Navbar } from "components";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
