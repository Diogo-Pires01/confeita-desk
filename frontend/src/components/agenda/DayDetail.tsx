import { User } from 'lucide-react';
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

interface DayDetailProps {
  date: string | null;
  orders: Order[];
}

export default function DayDetail({ date, orders }: DayDetailProps) {
  const { open } = useModal();
  const dayOrders = date ? orders.filter((o) => o.date.split('T')[0] === date) : [];

  return (
    <div className="bg-dash-surface border border-dash-border rounded-xl p-5 h-full">
      {!date ? (
        <p className="text-sm text-dash-text-muted text-center py-8">
          Selecione um dia no calendário
        </p>
      ) : (
        <>
          <h2 className="text-lg font-semibold text-dash-text-main mb-4">
            {formatDate(date)}
          </h2>

          {dayOrders.length === 0 ? (
            <p className="text-sm text-dash-text-muted text-center py-8">
              Nenhum pedido neste dia.
            </p>
          ) : (
            <div className="flex flex-col gap-3">
              {dayOrders.map((order) => (
                <div
                  key={order.id}
                  onClick={() => open('editOrder', order)}
                  className="bg-dash-card border border-dash-border rounded-xl p-3 flex flex-col gap-2 cursor-pointer hover:border-primary/40 transition"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-dash-text-main">
                      {order.items.map((i) => i.product.name).join(', ')}
                    </p>
                    <span
                      className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${statusStyle[order.status]}`}
                    >
                      {statusLabel[order.status]}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-dash-text-muted">
                    <span className="flex items-center gap-1">
                      <User size={13} />
                      {order.customer}
                    </span>
                  </div>
                  <p className="text-xs text-dash-text-soft">
                    R$ {order.total.toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
