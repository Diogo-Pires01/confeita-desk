import { Trash2 } from 'lucide-react';
import { useModal } from '../../contexts/ModalContext';
import ModalOverlay from './ModalOverlay';
import type { Order } from '../../types/order';

export default function EditOrderModal() {
  const { payload } = useModal();
  const order = payload as Order;

  if (!order) return null;

  return (
    <ModalOverlay title="Editar Pedido">
      <form className="flex flex-col gap-5">
        <fieldset className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-dash-text-muted">
            Cliente
          </label>
          <input
            type="text"
            defaultValue={order.customer}
            className="w-full px-3 py-2.5 rounded-xl bg-dash-card border border-dash-border text-sm text-dash-text-main outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
          />
        </fieldset>

        <fieldset className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-dash-text-muted">
            Produto
          </label>
          <input
            type="text"
            defaultValue={order.product}
            className="w-full px-3 py-2.5 rounded-xl bg-dash-card border border-dash-border text-sm text-dash-text-main outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
          />
        </fieldset>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <fieldset className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-dash-text-muted">
              Data de entrega
            </label>
            <input
              type="date"
              defaultValue={order.date}
              className="w-full px-3 py-2.5 rounded-xl bg-dash-card border border-dash-border text-sm text-dash-text-main outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
            />
          </fieldset>

          <fieldset className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-dash-text-muted">
              Status
            </label>
            <select
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
            Valor
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-dash-text-muted">
              R$
            </span>
            <input
              type="number"
              min="0"
              step="0.01"
              defaultValue={order.total}
              className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-dash-card border border-dash-border text-sm text-dash-text-main outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
            />
          </div>
        </fieldset>

        <div className="flex gap-3 mt-1">
          <button
            type="submit"
            className="flex-1 py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-xl transition"
          >
            Salvar
          </button>
          <button
            type="button"
            className="px-4 py-2.5 border border-red-200 text-red-500 hover:bg-red-50 text-sm font-medium rounded-xl transition flex items-center gap-2"
          >
            <Trash2 size={16} />
            Excluir
          </button>
        </div>
      </form>
    </ModalOverlay>
  );
}
