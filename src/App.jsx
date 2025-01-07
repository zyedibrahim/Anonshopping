import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import Navbar from "./Navbar";
import EachProudct from "./EachProudct";
import "./App.css";
import CheckOutPage from "./CheckOutPage";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AnnonShopping" element={<HomePage />} />
          <Route path="/AnnonShopping/Product/:id" element={<EachProudct />} />
          <Route path="/AnnonShopping/CheckOut" element={<CheckOutPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
