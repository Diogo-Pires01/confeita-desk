import { ClipboardList, ChefHat, PackageCheck, Truck } from 'lucide-react';
import { mockOrders } from '../../mocks/dashboard';
import SummaryCard from '../../components/dashboard/SummaryCard';
import WeeklyAgenda from '../../components/dashboard/WeeklyAgenda';
import { NewOrderButton } from '../../components/dashboard/NewOrderButton';
import { NewProductButton } from '../../components/dashboard/NewProductButton';

const count = (status?: string) =>
  status
    ? mockOrders.filter((o) => o.status === status).length
    : mockOrders.length;

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-dash-text-main">
          Dashboard
        </h1>
        <div className="flex gap-3">
          <NewOrderButton />
          <NewProductButton />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
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

      <WeeklyAgenda orders={mockOrders} />
    </div>
  );
}
