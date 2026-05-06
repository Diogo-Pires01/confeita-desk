import { Tag } from 'lucide-react';
import type { Product, ProductCategory } from '../../types/product';

const categoryLabel: Record<ProductCategory, string> = {
  bolos: 'Bolo',
  tortas: 'Torta',
  doces: 'Doce',
};

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-dash-surface border border-dash-border rounded-xl p-4 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-dash-text-main">
          {product.name}
        </h3>
        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary-dark">
          {categoryLabel[product.category]}
        </span>
      </div>

      <p className="text-xs text-dash-text-muted">{product.description}</p>

      <div className="flex items-center justify-between mt-1">
        <span className="flex items-center gap-1 text-xs text-dash-text-muted">
          <Tag size={13} />
          R$ {product.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
