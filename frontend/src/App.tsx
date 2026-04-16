import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from './pages/public/Landing';
import Login from './pages/auth/Login';

import DashboardLayout from './layouts/DashboardLayout';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardLayout />} />
      </Routes>
    </BrowserRouter>
  );
}
