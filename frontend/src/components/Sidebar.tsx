import { NavLink, useNavigate } from 'react-router-dom';
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
import { useAuth } from '../contexts/AuthContext';

const menuItems = [
  { name: 'Dashboard', icon: Home, path: '/dashboard' },
  { name: 'Pedidos', icon: ShoppingCart, path: '/dashboard/pedidos' },
  { name: 'Agenda', icon: CalendarDays, path: '/dashboard/agenda' },
  { name: 'Produtos', icon: Package, path: '/dashboard/produtos' },
  { name: 'Carteira', icon: Wallet, path: '/dashboard/carteira' },
];

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/login', { replace: true });
  }
  return (
    <aside
      className={`relative bg-dash-surface border-r border-dash-border h-screen p-4 transition-all duration-250 ease-in-out ${
        isOpen ? 'w-64' : 'w-20'
      }`}
    >
      <div
        className={`flex items-center mb-6 ${isOpen ? 'justify-between' : 'justify-center'}`}
      >
        {isOpen && (
          <p className="text-xl font-medium tracking-tight text-dash-text-main ml-2">
            Confeita<span className="text-primary font-semibold">Desk</span>
          </p>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          className="text-dash-text-muted hover:text-dash-text-main transition"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <nav className="flex flex-col gap-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === '/dashboard'}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-xl cursor-pointer transition ${!isOpen ? 'justify-center' : ''} ${
                  isActive
                    ? 'bg-primary/10 text-primary-dark font-medium'
                    : 'text-dash-text-soft hover:bg-dash-hover hover:text-dash-text-main'
                }`
              }
            >
              <Icon size={20} />
              {isOpen && <span className="text-sm">{item.name}</span>}
            </NavLink>
          );
        })}
      </nav>

      <footer className="absolute bottom-4 left-0 w-full px-4 flex flex-col gap-1">
        <button
          className={`flex items-center gap-3 p-3 rounded-xl text-dash-text-soft hover:bg-dash-hover hover:text-dash-text-main cursor-pointer transition ${!isOpen ? 'justify-center' : ''}`}
        >
          <Settings size={20} />
          {isOpen && <span className="text-sm">Configurações</span>}
        </button>
        <button
          onClick={handleLogout}
          className={`flex items-center gap-3 p-3 rounded-xl text-dash-text-soft hover:bg-dash-hover hover:text-dash-text-main cursor-pointer transition ${!isOpen ? 'justify-center' : ''}`}
        >
          <LogOut size={20} />
          {isOpen && <span className="text-sm">Sair</span>}
        </button>
      </footer>
    </aside>
  );
}
