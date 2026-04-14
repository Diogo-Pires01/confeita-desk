import { useState } from 'react';
import {
  Menu,
  X,
  Home,
  ShoppingCart,
  CalendarDays,
  Package,
  Wallet,
  Settings,
  LogOut,
} from 'lucide-react';

const menuItems = [
  { name: 'Dashboard', icon: Home },
  { name: 'Pedidos', icon: ShoppingCart },
  { name: 'Agenda', icon: CalendarDays },
  { name: 'Produtos', icon: Package },
  { name: 'Carteira', icon: Wallet },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      className={`relative bg-white shadow-lg h-screen p-4 transition-all duration-500 ease-in-out ${
        isOpen ? 'w-64' : 'w-20'
      }`}
    >
      <div
        className={`flex items-center mb-6 ${isOpen ? 'justify-between' : 'justify-center'}`}
      >
        {isOpen && <h1 className="text-xl font-bold">ConfeitaDesk</h1>}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <nav className="flex flex-col gap-3">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.name}
              className={`flex items-center gap-3 p-3 rounded-xl hover:bg-background cursor-pointer transition ${!isOpen ? 'justify-center' : ''}`}
            >
              <Icon size={20} />
              {isOpen && <span>{item.name}</span>}
            </button>
          );
        })}
      </nav>

      <footer className="absolute bottom-4 left-0 w-full px-4 flex flex-col gap-2">
        <button
          className={`flex items-center gap-3 p-3 rounded-xl hover:bg-background cursor-pointer transition ${!isOpen ? 'justify-center' : ''}`}
        >
          <Settings size={20} />
          {isOpen && <span>Configurações</span>}
        </button>
        <button
          className={`flex items-center gap-3 p-3 rounded-xl hover:bg-background cursor-pointer transition ${!isOpen ? 'justify-center' : ''}`}
        >
          <LogOut size={20} />
          {isOpen && <span>Sair</span>}
        </button>
      </footer>
    </aside>
  );
}
