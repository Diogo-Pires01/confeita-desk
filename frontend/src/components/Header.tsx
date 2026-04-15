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
    <header className="flex items-center justify-between bg-white shadow-sm px-6 py-3">
      <div className="relative w-96">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Buscar..."
          className="w-full pl-10 pr-4 py-2 rounded-xl bg-white border border-gray-300 outline-none text-sm transition focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="flex items-center gap-4">
        <div ref={notifRef} className="relative">
          <button
            aria-label="Notificações"
            onClick={() => setNotifOpen((prev) => !prev)}
            className="p-2 rounded-xl"
          >
            <Bell size={20} />
          </button>
          {notifOpen && (
            <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-lg border border-gray-100 p-4 z-50">
              <p className="text-sm text-gray-400 text-center">
                Nenhuma notificação
              </p>
            </div>
          )}
        </div>

        <div ref={avatarRef} className="relative">
          <button
            aria-label="Menu do usuário"
            onClick={() => setAvatarOpen((prev) => !prev)}
            className="h-9 w-9 rounded-full overflow-hidden"
          >
            <img
              src="https://ui-avatars.com/api/?name=User&background=random"
              alt="Avatar do usuário"
              className="h-full w-full object-cover"
            />
          </button>
          {avatarOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 p-4 z-50">
              <p className="text-sm text-gray-400 text-center">
                Sem informações
              </p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
