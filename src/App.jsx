import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./HomePage";
import Navbar from "./Navbar";
import EachProudct from "./EachProudct";
import "./App.css";
import CheckOutPage from "./CheckOutPage";
import Footer from "./Footer";
import NotFoundPage from "./NotFoundPage";
import AdminDashboard from "./Admin/AdminDashboard";

function App() {
  const location = useLocation();
  const hideNavAndFooterOnRoutes = ["/AnnonShopping/Admin"]; // List of routes where navbar and footer should be hidden
  const shouldHideNavAndFooter = hideNavAndFooterOnRoutes.some((path) =>
    location.pathname.startsWith(path)
  );
  return (
    <div className="bd">
      {!shouldHideNavAndFooter && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AnnonShopping" element={<HomePage />} />
          <Route path="/AnnonShopping/Home" element={<HomePage />} />
          <Route path="/AnnonShopping/Product/:id" element={<EachProudct />} />
          <Route path="/AnnonShopping/CheckOut" element={<CheckOutPage />} />

          {/* Admin Route */}
          <Route path="/AnnonShopping/Admin/*" element={<AdminDashboard />} />

          {/* Catch-All Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      {!shouldHideNavAndFooter && (
        <footer className="ft">
          <Footer />
        </footer>
      )}
    </div>
  );
}

export default App;
