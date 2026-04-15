import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DashboardLayout from './layouts/DashboardLayout';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />} />
      </Routes>
    </BrowserRouter>
  );
}
