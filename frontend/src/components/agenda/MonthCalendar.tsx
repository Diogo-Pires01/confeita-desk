import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Order, OrderStatus } from '../../types/order';

const DAY_HEADERS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

const MONTH_NAMES = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

const dotColor: Record<OrderStatus, string> = {
  preparo: 'bg-status-producao',
  pronto: 'bg-status-pronto',
  entregue: 'bg-status-entregue',
};

interface MonthCalendarProps {
  year: number;
  month: number;
  orders: Order[];
  selectedDate: string | null;
  onSelectDate: (date: string) => void;
  onPrev: () => void;
  onNext: () => void;
  onToday: () => void;
}

function toDateStr(y: number, m: number, d: number) {
  return `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
}

export default function MonthCalendar({
  year,
  month,
  orders,
  selectedDate,
  onSelectDate,
  onPrev,
  onNext,
  onToday,
}: MonthCalendarProps) {
  const today = new Date().toISOString().split('T')[0];
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: (number | null)[] = Array(firstDay).fill(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div className="bg-dash-surface border border-dash-border rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-dash-text-main">
          {MONTH_NAMES[month]} {year}
        </h2>
        <div className="flex items-center gap-1">
          <button
            onClick={onPrev}
            className="p-1.5 rounded-lg text-dash-text-soft hover:bg-dash-hover transition"
            aria-label="Mês anterior"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={onToday}
            className="text-xs font-medium text-dash-text-muted hover:text-dash-text-main px-2 py-1 rounded-lg hover:bg-dash-hover transition"
          >
            Hoje
          </button>
          <button
            onClick={onNext}
            className="p-1.5 rounded-lg text-dash-text-soft hover:bg-dash-hover transition"
            aria-label="Próximo mês"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {DAY_HEADERS.map((d) => (
          <div
            key={d}
            className="text-center text-xs font-medium text-dash-text-muted py-2"
          >
            {d}
          </div>
        ))}

        {cells.map((day, i) => {
          if (day === null) return <div key={`empty-${i}`} />;

          const dateStr = toDateStr(year, month, day);
          const dayOrders = orders.filter((o) => o.date === dateStr);
          const isToday = dateStr === today;
          const isSelected = dateStr === selectedDate;

          return (
            <button
              key={dateStr}
              onClick={() => onSelectDate(dateStr)}
              className={`relative flex flex-col items-center py-4 rounded-lg transition ${
                isSelected
                  ? 'bg-primary text-white'
                  : isToday
                    ? 'bg-primary/10 text-primary-dark'
                    : 'hover:bg-dash-hover text-dash-text-main'
              }`}
            >
              <span className="text-sm">{day}</span>
              {dayOrders.length > 0 && (
                <div className="flex gap-0.5 mt-1">
                  {[...new Set(dayOrders.map((o) => o.status))].map(
                    (status) => (
                      <span
                        key={status}
                        className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-white' : dotColor[status]}`}
                      />
                    ),
                  )}
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
