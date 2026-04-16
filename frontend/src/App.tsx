import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/auth/Login';

import DashboardLayout from './layouts/DashboardLayout';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<DashboardLayout />} />
      </Routes>
    </BrowserRouter>
  );
}
