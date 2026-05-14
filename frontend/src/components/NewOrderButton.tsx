import { Plus } from 'lucide-react';
import { useModal } from '../contexts/ModalContext';

export function NewOrderButton() {
  const { open } = useModal();

  return (
    <button
      onClick={() => open('newOrder')}
      className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white text-sm font-medium px-4 py-2.5 rounded-xl transition"
    >
      <Plus size={18} />
      Novo Pedido
    </button>
  );
}
