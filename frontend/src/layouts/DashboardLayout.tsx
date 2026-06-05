import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import Sidebar from '../components/Sidebar';
import BottomBar from '../components/BottomBar';
import Header from '../components/Header';

import { ModalProvider } from '../contexts/ModalContext';
import ModalRoot from '../components/modals/ModalRoot';

export default function DashboardLayout() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <ModalProvider>
      <div className="flex h-screen bg-dash-bg overflow-hidden">
        <div className="hidden md:block">
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />

          <main className="p-4 flex-1 overflow-auto pb-20 md:pb-4">
            <Outlet />
          </main>
        </div>

        <BottomBar />
        <ModalRoot />
      </div>
    </ModalProvider>
  );
}
