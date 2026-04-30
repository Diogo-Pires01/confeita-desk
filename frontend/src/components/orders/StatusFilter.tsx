import type { OrderStatus } from '../../types/order';

type FilterValue = OrderStatus | 'todos';

const filters: { label: string; value: FilterValue }[] = [
  { label: 'Todos', value: 'todos' },
  { label: 'Em preparo', value: 'preparo' },
  { label: 'Prontos', value: 'pronto' },
  { label: 'Entregues', value: 'entregue' },
];

interface StatusFilterProps {
  active: FilterValue;
  onChange: (value: FilterValue) => void;
}

export default function StatusFilter({ active, onChange }: StatusFilterProps) {
  return (
    <div className="flex gap-2">
      {filters.map(({ label, value }) => (
        <button
          key={value}
          onClick={() => onChange(value)}
          className={`text-sm px-4 py-2 rounded-xl transition ${
            active === value
              ? 'bg-primary text-white'
              : 'bg-dash-surface border border-dash-border text-dash-text-soft hover:bg-dash-hover'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
