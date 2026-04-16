import { useRef, useState } from 'react';
import { Search, Bell } from 'lucide-react';
import useClickOutside from '../hooks/useClickOutside';

export default function Header() {
  const [notifOpen, setNotifOpen] = useState(false);
  const [avatarOpen, setAvatarOpen] = useState(false);

  const notifRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);

  useClickOutside(notifRef, () => setNotifOpen(false));
  useClickOutside(avatarRef, () => setAvatarOpen(false));

  return (
    <header className="flex items-center justify-between bg-dash-surface border-b border-dash-border px-6 py-3">
      <div className="relative w-96">
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
              src="https://ui-avatars.com/api/?name=User&background=10b981&color=fff"
              alt="Avatar do usuário"
              className="h-full w-full object-cover"
            />
          </button>
          {avatarOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-dash-surface rounded-xl shadow-lg border border-dash-border p-4 z-50">
              <p className="text-sm text-dash-text-muted text-center">
                Sem informações
              </p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
