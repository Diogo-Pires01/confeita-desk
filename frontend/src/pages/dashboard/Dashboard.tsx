import { ClipboardList, ChefHat, PackageCheck, Truck } from 'lucide-react';
import { useOrders } from '../../hooks/useOrders';
import SummaryCard from '../../components/dashboard/SummaryCard';
import WeeklyAgenda from '../../components/dashboard/WeeklyAgenda';
import { NewOrderButton } from '../../components/NewOrderButton';
import { NewProductButton } from '../../components/NewProductButton';

export default function Dashboard() {
  const { orders, loading } = useOrders();

  const count = (status?: string) =>
    status ? orders.filter((o) => o.status === status).length : orders.length;

  if (loading) return <p className="text-dash-text-muted">Carregando...</p>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-semibold text-dash-text-main">
          Dashboard
        </h1>
        <div className="hidden md:flex gap-3">
          <NewOrderButton />
          <NewProductButton />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        <SummaryCard
          label="Total pedidos"
          value={count()}
          icon={ClipboardList}
          color="bg-primary"
        />
        <SummaryCard
          label="Em preparo"
          value={count('preparo')}
          icon={ChefHat}
          color="bg-status-producao"
        />
        <SummaryCard
          label="Prontos"
          value={count('pronto')}
          icon={PackageCheck}
          color="bg-status-pronto"
        />
        <SummaryCard
          label="Entregues"
          value={count('entregue')}
          icon={Truck}
          color="bg-status-entregue"
        />
      </div>

      <WeeklyAgenda orders={orders} />
    </div>
  );
}
