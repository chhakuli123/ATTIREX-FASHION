import { Routes, Route } from "react-router-dom";

import "./App.css";
import { HomePage } from "pages";
import { Navbar } from "components";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
