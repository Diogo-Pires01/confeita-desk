import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './guards/ProtectedRoute';

import Landing from './pages/public/Landing';
import Login from './pages/auth/Login';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/dashboard/Dashboard';
import Orders from './pages/orders/Orders';
import Agenda from './pages/agenda/Agenda';
import Products from './pages/products/Products';
import Wallet from './pages/wallet/Wallet';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="pedidos" element={<Orders />} />
              <Route path="agenda" element={<Agenda />} />
              <Route path="produtos" element={<Products />} />
              <Route path="carteira" element={<Wallet />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
