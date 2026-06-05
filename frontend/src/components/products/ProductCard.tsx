import { Tag } from 'lucide-react';
import type { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-dash-surface border border-dash-border rounded-xl p-4 flex flex-col gap-2">
      <h3 className="text-sm font-semibold text-dash-text-main">
        {product.name}
      </h3>

      {product.description && (
        <p className="text-xs text-dash-text-muted">{product.description}</p>
      )}

      <div className="flex items-center mt-1">
        <span className="flex items-center gap-1 text-xs text-dash-text-muted">
          <Tag size={13} />
          R$ {product.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
