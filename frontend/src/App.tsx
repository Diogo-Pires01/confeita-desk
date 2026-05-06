import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from './pages/public/Landing';
import Login from './pages/auth/Login';

import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/dashboard/Dashboard';
import Orders from './pages/orders/Orders';
import Agenda from './pages/agenda/Agenda';
import Products from './pages/products/Products';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="pedidos" element={<Orders />} />
          <Route path="agenda" element={<Agenda />} />
          <Route path="produtos" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
