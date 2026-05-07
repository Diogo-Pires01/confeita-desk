import { useState } from 'react';
import { mockProducts } from '../../mocks/products';
import ProductCard from '../../components/products/ProductCard';
import CategoryFilter from '../../components/products/CategoryFilter';
import { NewProductButton } from '../../components/dashboard/NewProductButton';
import type { ProductCategory } from '../../types/product';

type FilterValue = ProductCategory | 'todos';

export default function Products() {
  const [filter, setFilter] = useState<FilterValue>('todos');

  const filtered =
    filter === 'todos'
      ? mockProducts
      : mockProducts.filter((p) => p.category === filter);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-semibold text-dash-text-main">
          Produtos
        </h1>
        <NewProductButton />
      </div>

      <CategoryFilter active={filter} onChange={setFilter} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-sm text-dash-text-muted text-center py-8">
          Nenhum produto encontrado.
        </p>
      )}
    </div>
  );
}
