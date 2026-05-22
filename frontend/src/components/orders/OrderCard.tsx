import { Calendar } from 'lucide-react';
import type { Order, OrderStatus } from '../../types/order';
import { useModal } from '../../contexts/ModalContext';

const statusStyle: Record<OrderStatus, string> = {
  preparo: 'bg-status-producao/20 text-yellow-700',
  pronto: 'bg-status-pronto/20 text-blue-700',
  entregue: 'bg-status-entregue/20 text-green-700',
};

const statusLabel: Record<OrderStatus, string> = {
  preparo: 'Em preparo',
  pronto: 'Pronto',
  entregue: 'Entregue',
};

function formatDate(date: string) {
  const [y, m, d] = date.split('-');
  return `${d}/${m}/${y}`;
}

interface OrderCardProps {
  order: Order;
}

export default function OrderCard({ order }: OrderCardProps) {
  const { open } = useModal();

  return (
    <div
      onClick={() => open('editOrder', order)}
      className="bg-dash-surface border border-dash-border rounded-xl p-4 flex flex-col gap-3 cursor-pointer hover:border-primary/40 transition"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-dash-text-main">
          {order.customer}
        </h3>
        <span
          className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${statusStyle[order.status]}`}
        >
          {statusLabel[order.status]}
        </span>
      </div>

      <p className="text-sm text-dash-text-soft">{order.product}</p>

      <div className="flex items-center justify-between text-xs text-dash-text-muted">
        <span className="flex items-center gap-1">
          <Calendar size={14} />
          {formatDate(order.date)}
        </span>
        <span className="flex items-center gap-1">
          R$ {order.total.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
