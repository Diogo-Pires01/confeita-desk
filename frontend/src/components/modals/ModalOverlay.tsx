import { useRef, type ReactNode } from 'react';
import { X } from 'lucide-react';
import useClickOutside from '../../hooks/useClickOutside';
import { useModal } from '../../contexts/ModalContext';

interface ModalOverlayProps {
  title: string;
  children: ReactNode;
}

export default function ModalOverlay({ title, children }: ModalOverlayProps) {
  const { close } = useModal();
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, close);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div
        ref={ref}
        className="bg-dash-surface border border-dash-border rounded-2xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto p-6"
      >
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-semibold text-dash-text-main">{title}</h2>
          <button
            onClick={close}
            className="p-1.5 rounded-lg text-dash-text-muted hover:bg-dash-hover hover:text-dash-text-main transition"
            aria-label="Fechar"
          >
            <X size={18} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
