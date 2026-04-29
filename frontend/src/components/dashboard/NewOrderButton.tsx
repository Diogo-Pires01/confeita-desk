import { Plus } from 'lucide-react';

export function NewOrderButton() {
  return (
    <button className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white text-sm font-medium px-4 py-2.5 rounded-xl transition">
      <Plus size={18} />
      Novo Pedido
    </button>
  );
}
