import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Order, OrderStatus } from '../../types/order';

const DAY_LABELS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

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

interface WeeklyAgendaProps {
  orders: Order[];
}

function getWeekDays(offset: number): { label: string; date: string }[] {
  const now = new Date();
  const sunday = new Date(now);
  sunday.setDate(now.getDate() - now.getDay() + offset * 7);

  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(sunday);
    d.setDate(sunday.getDate() + i);
    return {
      label: `${DAY_LABELS[i]} ${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}`,
      date: d.toISOString().split('T')[0],
    };
  });
}

export default function WeeklyAgenda({ orders }: WeeklyAgendaProps) {
  const [weekOffset, setWeekOffset] = useState(0);
  const days = getWeekDays(weekOffset);
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="bg-dash-surface border border-dash-border rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-dash-text-main">
          Agenda Semanal
        </h2>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setWeekOffset((w) => w - 1)}
            className="p-1.5 rounded-lg text-dash-text-soft hover:bg-dash-hover transition"
            aria-label="Semana anterior"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => setWeekOffset(0)}
            className="text-xs font-medium text-dash-text-muted hover:text-dash-text-main px-2 py-1 rounded-lg hover:bg-dash-hover transition"
          >
            Hoje
          </button>
          <button
            onClick={() => setWeekOffset((w) => w + 1)}
            className="p-1.5 rounded-lg text-dash-text-soft hover:bg-dash-hover transition"
            aria-label="Próxima semana"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {days.map(({ label, date }) => {
          const dayOrders = orders.filter((o) => o.date === date);
          const isToday = date === today;

          return (
            <div
              key={date}
              className={`rounded-xl p-3 min-h-[140px] ${isToday ? 'bg-primary/10 border border-primary/30' : 'bg-dash-card'}`}
            >
              <p
                className={`text-xs font-medium mb-2 ${isToday ? 'text-primary-dark' : 'text-dash-text-muted'}`}
              >
                {label}
              </p>

              <div className="flex flex-col gap-1.5">
                {dayOrders.map((order) => (
                  <div
                    key={order.id}
                    className="bg-dash-surface rounded-lg p-2 border border-dash-border"
                  >
                    <p className="text-xs font-medium text-dash-text-main truncate">
                      {order.product}
                    </p>
                    <p className="text-[11px] text-dash-text-muted truncate">
                      {order.customer}
                    </p>
                    <span
                      className={`inline-block text-[10px] font-medium px-1.5 py-0.5 rounded mt-1 ${statusStyle[order.status]}`}
                    >
                      {statusLabel[order.status]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
