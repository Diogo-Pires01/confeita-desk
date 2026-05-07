import { useState } from 'react';
import { mockOrders } from '../../mocks/dashboard';
import OrderCard from '../../components/orders/OrderCard';
import StatusFilter from '../../components/orders/StatusFilter';
import { NewOrderButton } from '../../components/dashboard/NewOrderButton';
import type { OrderStatus } from '../../types/order';

type FilterValue = OrderStatus | 'todos';

export default function Orders() {
  const [filter, setFilter] = useState<FilterValue>('todos');

  const filtered =
    filter === 'todos'
      ? mockOrders
      : mockOrders.filter((o) => o.status === filter);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-semibold text-dash-text-main">
          Pedidos
        </h1>
        <NewOrderButton />
      </div>

      <StatusFilter active={filter} onChange={setFilter} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filtered.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-sm text-dash-text-muted text-center py-8">
          Nenhum pedido encontrado.
        </p>
      )}
    </div>
  );
}
