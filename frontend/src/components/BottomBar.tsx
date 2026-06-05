import { NavLink } from 'react-router-dom';
import {
  Home,
  ShoppingCart,
  CalendarDays,
  Package,
  Wallet,
} from 'lucide-react';

const items = [
  { icon: Home, path: '/dashboard', end: true },
  { icon: ShoppingCart, path: '/dashboard/pedidos' },
  { icon: CalendarDays, path: '/dashboard/agenda' },
  { icon: Package, path: '/dashboard/produtos' },
  { icon: Wallet, path: '/dashboard/carteira' },
];

export default function BottomBar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden items-center justify-around bg-dash-surface border-t border-dash-border py-3">
      {items.map(({ icon: Icon, path, end }) => (
        <NavLink
          key={path}
          to={path}
          end={end}
          className={({ isActive }) =>
            `p-2 rounded-xl transition ${isActive ? 'text-primary' : 'text-dash-text-soft'}`
          }
        >
          <Icon size={22} />
        </NavLink>
      ))}
    </nav>
  );
}
