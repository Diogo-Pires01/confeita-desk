import type { ProductCategory } from '../../types/product';

type FilterValue = ProductCategory | 'todos';

const filters: { label: string; value: FilterValue }[] = [
  { label: 'Todos', value: 'todos' },
  { label: 'Bolos', value: 'bolos' },
  { label: 'Tortas', value: 'tortas' },
  { label: 'Doces', value: 'doces' },
];

interface CategoryFilterProps {
  active: FilterValue;
  onChange: (value: FilterValue) => void;
}

export default function CategoryFilter({
  active,
  onChange,
}: CategoryFilterProps) {
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
