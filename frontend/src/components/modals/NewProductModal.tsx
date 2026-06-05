import { useState } from 'react';
import ModalOverlay from './ModalOverlay';
import { useModal } from '../../contexts/ModalContext';
import api from '../../services/api';

export default function NewProductModal() {
  const { close } = useModal();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setLoading(true);
    try {
      await api.post('/products', {
        name: form.get('name'),
        price: Number(form.get('price')),
        description: form.get('description') || undefined,
      });
      close();
      window.location.reload();
    } finally {
      setLoading(false);
    }
  }

  return (
    <ModalOverlay title="Cadastrar Produto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <fieldset className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-dash-text-muted">
            Nome
          </label>
          <input
            name="name"
            type="text"
            required
            placeholder="Ex: Bolo Red Velvet"
            className="w-full px-3 py-2.5 rounded-xl bg-dash-card border border-dash-border text-sm text-dash-text-main placeholder:text-dash-text-muted outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
          />
        </fieldset>

        <fieldset className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-dash-text-muted">
            Preço
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-dash-text-muted">
              R$
            </span>
            <input
              name="price"
              type="number"
              min="0"
              step="0.01"
              required
              placeholder="0,00"
              className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-dash-card border border-dash-border text-sm text-dash-text-main placeholder:text-dash-text-muted outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
            />
          </div>
        </fieldset>

        <fieldset className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-dash-text-muted">
            Descrição
          </label>
          <textarea
            name="description"
            placeholder="Breve descrição do produto"
            rows={3}
            className="w-full px-3 py-2.5 rounded-xl bg-dash-card border border-dash-border text-sm text-dash-text-main placeholder:text-dash-text-muted outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition resize-none"
          />
        </fieldset>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2.5 mt-1 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-xl transition disabled:opacity-50"
        >
          {loading ? 'Cadastrando...' : 'Cadastrar'}
        </button>
      </form>
    </ModalOverlay>
  );
}
