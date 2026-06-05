import { useProducts } from '../../hooks/useProducts';
import ProductCard from '../../components/products/ProductCard';
import { NewProductButton } from '../../components/NewProductButton';

export default function Products() {
  const { products, loading } = useProducts();

  if (loading) return <p className="text-dash-text-muted">Carregando...</p>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-semibold text-dash-text-main">
          Produtos
        </h1>
        <NewProductButton />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {products.length === 0 && (
        <p className="text-sm text-dash-text-muted text-center py-8">
          Nenhum produto encontrado.
        </p>
      )}
    </div>
  );
}
