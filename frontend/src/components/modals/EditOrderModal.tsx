import { useState } from 'react';
import { Trash2 } from 'lucide-react';
import { useModal } from '../../contexts/ModalContext';
import ModalOverlay from './ModalOverlay';
import type { Order } from '../../types/order';
import api from '../../services/api';

export default function EditOrderModal() {
  const { payload, close } = useModal();
  const order = payload as Order;
  const [loading, setLoading] = useState(false);

  if (!order) return null;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setLoading(true);
    try {
      await api.patch(`/orders/${order.id}/status`, {
        status: form.get('status'),
      });
      close();
      window.location.reload();
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete() {
    setLoading(true);
    try {
      await api.delete(`/orders/${order.id}`);
      close();
      window.location.reload();
    } finally {
      setLoading(false);
    }
  }

  return (
    <ModalOverlay title="Editar Pedido">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <fieldset className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-dash-text-muted">
            Cliente
          </label>
          <input
            type="text"
            defaultValue={order.customer}
            disabled
            className="w-full px-3 py-2.5 rounded-xl bg-dash-card border border-dash-border text-sm text-dash-text-main outline-none opacity-60"
          />
        </fieldset>

        <fieldset className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-dash-text-muted">
            Produtos
          </label>
          <div className="space-y-1">
            {order.items.map((item) => (
              <p key={item.id} className="text-sm text-dash-text-soft">
                {item.quantity}x {item.product.name} — R${' '}
                {(item.quantity * item.unitPrice).toFixed(2)}
              </p>
            ))}
          </div>
        </fieldset>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <fieldset className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-dash-text-muted">
              Data de entrega
            </label>
            <input
              type="date"
              defaultValue={order.date.split('T')[0]}
              disabled
              className="w-full px-3 py-2.5 rounded-xl bg-dash-card border border-dash-border text-sm text-dash-text-main outline-none opacity-60"
            />
          </fieldset>

          <fieldset className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-dash-text-muted">
              Status
            </label>
            <select
              name="status"
              defaultValue={order.status}
              className="w-full px-3 py-2.5 rounded-xl bg-dash-card border border-dash-border text-sm text-dash-text-main outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
            >
              <option value="preparo">Em preparo</option>
              <option value="pronto">Pronto</option>
              <option value="entregue">Entregue</option>
            </select>
          </fieldset>
        </div>

        <fieldset className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-dash-text-muted">
            Total
          </label>
          <p className="text-sm font-medium text-dash-text-main">
            R$ {order.total.toFixed(2)}
          </p>
        </fieldset>

        <div className="flex gap-3 mt-1">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-xl transition disabled:opacity-50"
          >
            Salvar
          </button>
          <button
            type="button"
            onClick={handleDelete}
            disabled={loading}
            className="px-4 py-2.5 border border-red-200 text-red-500 hover:bg-red-50 text-sm font-medium rounded-xl transition flex items-center gap-2 disabled:opacity-50"
          >
            <Trash2 size={16} />
            Excluir
          </button>
        </div>
      </form>
    </ModalOverlay>
  );
}
