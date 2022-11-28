import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Headerbar } from './components/Headerbar';
import { Sidebar } from './components/Sidebar';
import { Billing } from './pages/Billing';

import { Dashboard } from './pages/Dashboard';
import { Order } from './pages/Order';
import { Product } from './pages/Product';
import { Sale } from './pages/Sale';
import Signin from './Signin';

export function AppRoutes() {
  return (
    <Router>
      <div className="flex flex-col sm:flex-row">
        <div className="sm:fixed">
          <Sidebar />
        </div>
        <div className="flex-auto md:ml-44 lg:ml-64 dark:text-gray-200 h-full min-h-screen">
          <Headerbar />
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="home" element={<Dashboard />} />
            <Route path="billing" element={<Billing />} />
            <Route path="order" element={<Order />} />
            <Route path="sale" element={<Sale />} />
            <Route path="product" element={<Product />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
