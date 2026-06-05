import { useState } from 'react';
import ModalOverlay from './ModalOverlay';
import { useModal } from '../../contexts/ModalContext';
import api from '../../services/api';

export default function NewTransactionModal() {
  const { close } = useModal();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setLoading(true);
    try {
      await api.post('/transactions', {
        type: form.get('type'),
        description: form.get('description'),
        value: Number(form.get('value')),
        date: form.get('date'),
      });
      close();
      window.location.reload();
    } finally {
      setLoading(false);
    }
  }

  return (
    <ModalOverlay title="Nova Transação">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <fieldset className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-dash-text-muted">
            Tipo
          </label>
          <select
            name="type"
            required
            className="w-full px-3 py-2.5 rounded-xl bg-dash-card border border-dash-border text-sm text-dash-text-main outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
          >
            <option value="entrada">Entrada</option>
            <option value="saida">Saída</option>
          </select>
        </fieldset>

        <fieldset className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-dash-text-muted">
            Descrição
          </label>
          <input
            name="description"
            type="text"
            required
            placeholder="Ex: Bolo de aniversário - Maria"
            className="w-full px-3 py-2.5 rounded-xl bg-dash-card border border-dash-border text-sm text-dash-text-main placeholder:text-dash-text-muted outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
          />
        </fieldset>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <fieldset className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-dash-text-muted">
              Valor
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-dash-text-muted">
                R$
              </span>
              <input
                name="value"
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
              Data
            </label>
            <input
              name="date"
              type="date"
              required
              className="w-full px-3 py-2.5 rounded-xl bg-dash-card border border-dash-border text-sm text-dash-text-main outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
            />
          </fieldset>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2.5 mt-1 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-xl transition disabled:opacity-50"
        >
          {loading ? 'Registrando...' : 'Registrar'}
        </button>
      </form>
    </ModalOverlay>
  );
}
