import { Route, Routes } from "react-router-dom";

import AdminHome from "./AdminHome";
import AdminOrder from "./AdminOrder";
import NotFoundPage from "../NotFoundPage";
import AdminDashboard from "./AdminDashboard";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminDashboard />} />
      <Route path="/Dashboard" element={<AdminDashboard />} />
      <Route path="/Home" element={<AdminHome />} />
      <Route path="/Orders" element={<AdminOrder />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AdminRoutes;
