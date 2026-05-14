import { PackagePlus } from 'lucide-react';
import { useModal } from '../contexts/ModalContext';

export function NewProductButton() {
  const { open } = useModal();

  return (
    <button
      onClick={() => open('newProduct')}
      className="flex items-center gap-2 bg-dash-surface hover:bg-dash-hover border border-dash-border text-dash-text-main text-sm font-medium px-4 py-2.5 rounded-xl transition"
    >
      <PackagePlus size={18} />
      Cadastrar Produto
    </button>
  );
}
