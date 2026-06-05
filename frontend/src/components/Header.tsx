import { useRef, useState } from 'react';
import { Search, Bell, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import useClickOutside from '../hooks/useClickOutside';
import { useAuth } from '../contexts/AuthContext';

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [notifOpen, setNotifOpen] = useState(false);
  const [avatarOpen, setAvatarOpen] = useState(false);

  const notifRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);

  useClickOutside(notifRef, () => setNotifOpen(false));
  useClickOutside(avatarRef, () => setAvatarOpen(false));

  function handleLogout() {
    logout();
    navigate('/login', { replace: true });
  }

  const avatarUrl =
    user?.picture ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || 'U')}&background=10b981&color=fff`;

  return (
    <header className="flex items-center justify-between bg-dash-surface border-b border-dash-border px-4 md:px-6 py-3">
      <p className="text-lg font-medium tracking-tight text-dash-text-main md:hidden">
        Confeita<span className="text-primary font-semibold">Desk</span>
      </p>
      <div className="relative w-96 hidden md:block">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-dash-text-muted"
        />
        <input
          type="text"
          placeholder="Buscar..."
          className="w-full pl-10 pr-4 py-2 rounded-xl bg-dash-card border border-dash-border outline-none text-sm text-dash-text-main placeholder:text-dash-text-muted transition focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="flex items-center gap-4">
        <div ref={notifRef} className="relative">
          <button
            aria-label="Notificações"
            onClick={() => setNotifOpen((prev) => !prev)}
            className="p-2 rounded-xl text-dash-text-soft hover:bg-dash-hover transition"
          >
            <Bell size={20} />
          </button>
          {notifOpen && (
            <div className="absolute right-0 mt-2 w-72 bg-dash-surface rounded-xl shadow-lg border border-dash-border p-4 z-50">
              <p className="text-sm text-dash-text-muted text-center">
                Nenhuma notificação
              </p>
            </div>
          )}
        </div>

        <div ref={avatarRef} className="relative">
          <button
            aria-label="Menu do usuário"
            onClick={() => setAvatarOpen((prev) => !prev)}
            className="h-9 w-9 rounded-full overflow-hidden ring-2 ring-dash-border"
          >
            <img
              src={avatarUrl}
              alt="Avatar do usuário"
              className="h-full w-full object-cover"
            />
          </button>
          {avatarOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-dash-surface rounded-xl shadow-lg border border-dash-border p-4 z-50 flex flex-col items-center gap-3">
              <img
                src={avatarUrl}
                alt="Foto de perfil"
                className="h-16 w-16 rounded-full object-cover"
              />
              <div className="text-center">
                <p className="text-sm font-medium text-dash-text-main">
                  {user?.name}
                </p>
                <p className="text-xs text-dash-text-muted">{user?.email}</p>
              </div>
              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 mt-1 border border-dash-border rounded-xl text-sm font-medium text-red-400 hover:bg-red-500/10 transition"
              >
                <LogOut size={16} />
                Sair
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
