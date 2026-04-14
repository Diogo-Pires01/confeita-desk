import './App.css';
import { useState } from 'react';
import Sidebar from './layouts/Sidebar';
import Header from './layouts/Header';

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-6 bg-gray-50 overflow-auto">
          <h2 className="text-2xl font-semibold">Dashboard</h2>
        </main>
      </div>
    </div>
  );
}

export default App;
