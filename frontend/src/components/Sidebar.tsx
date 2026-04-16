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

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
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
            <button
              key={item.name}
              className={`flex items-center gap-3 p-3 rounded-xl text-dash-text-soft hover:bg-dash-hover hover:text-dash-text-main cursor-pointer transition ${!isOpen ? 'justify-center' : ''}`}
            >
              <Icon size={20} />
              {isOpen && <span className="text-sm">{item.name}</span>}
            </button>
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
          className={`flex items-center gap-3 p-3 rounded-xl text-dash-text-soft hover:bg-dash-hover hover:text-dash-text-main cursor-pointer transition ${!isOpen ? 'justify-center' : ''}`}
        >
          <LogOut size={20} />
          {isOpen && <span className="text-sm">Sair</span>}
        </button>
      </footer>
    </aside>
  );
}
