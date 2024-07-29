import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Billing } from "./pages/Billing";
import { Dashboard } from "./pages/Dashboard";
import { Order } from "./pages/Order";
import { Product } from "./pages/Product";
import { Sale } from "./pages/Sale";
import Signin from "./Signin";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="home" element={<Dashboard />} />
        <Route path="billing" element={<Billing />} />
        <Route path="order" element={<Order />} />
        <Route path="sale" element={<Sale />} />
        <Route path="product" element={<Product />} />
      </Routes>
    </Router>
  );
}
