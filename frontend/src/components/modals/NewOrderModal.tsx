import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import ModalOverlay from './ModalOverlay';
import { useProducts } from '../../hooks/useProducts';
import { useModal } from '../../contexts/ModalContext';
import api from '../../services/api';

interface OrderItemForm {
  productId: string;
  quantity: number;
}

export default function NewOrderModal() {
  const { products } = useProducts();
  const { close } = useModal();
  const [items, setItems] = useState<OrderItemForm[]>([
    { productId: '', quantity: 1 },
  ]);
  const [loading, setLoading] = useState(false);

  function addItem() {
    setItems([...items, { productId: '', quantity: 1 }]);
  }

  function removeItem(index: number) {
    setItems(items.filter((_, i) => i !== index));
  }

  function updateItem(index: number, field: keyof OrderItemForm, value: string | number) {
    setItems(items.map((item, i) => (i === index ? { ...item, [field]: value } : item)));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setLoading(true);
    try {
      const orderItems = items.map((item) => {
        const product = products.find((p) => p.id === item.productId);
        return {
          productId: item.productId,
          quantity: item.quantity,
          unitPrice: product?.price ?? 0,
        };
      });
      await api.post('/orders', {
        customer: form.get('customer'),
        date: form.get('date'),
        items: orderItems,
      });
      close();
      window.location.reload();
    } finally {
      setLoading(false);
    }
  }

  return (
    <ModalOverlay title="Novo Pedido">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <fieldset className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-dash-text-muted">
            Cliente
          </label>
          <input
            name="customer"
            type="text"
            required
            placeholder="Nome do cliente"
            className="w-full px-3 py-2.5 rounded-xl bg-dash-card border border-dash-border text-sm text-dash-text-main placeholder:text-dash-text-muted outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
          />
        </fieldset>

        <fieldset className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-dash-text-muted">
            Data de entrega
          </label>
          <input
            name="date"
            type="date"
            required
            className="w-full px-3 py-2.5 rounded-xl bg-dash-card border border-dash-border text-sm text-dash-text-main outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
          />
        </fieldset>

        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-medium text-dash-text-muted">
              Produtos
            </label>
            <button
              type="button"
              onClick={addItem}
              className="flex items-center gap-1 text-xs text-primary hover:text-primary-dark transition"
            >
              <Plus size={14} /> Adicionar
            </button>
          </div>
          {items.map((item, index) => (
            <div key={index} className="flex gap-2 items-center">
              <select
                value={item.productId}
                onChange={(e) => updateItem(index, 'productId', e.target.value)}
                required
                className="flex-1 px-3 py-2.5 rounded-xl bg-dash-card border border-dash-border text-sm text-dash-text-main outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
              >
                <option value="">Selecione</option>
                {products.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} - R$ {p.price.toFixed(2)}
                  </option>
                ))}
              </select>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateItem(index, 'quantity', Number(e.target.value))}
                className="w-16 px-2 py-2.5 rounded-xl bg-dash-card border border-dash-border text-sm text-dash-text-main text-center outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
              />
              {items.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeItem(index)}
                  className="p-2 text-red-400 hover:text-red-500 transition"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          ))}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2.5 mt-1 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-xl transition disabled:opacity-50"
        >
          {loading ? 'Criando...' : 'Criar Pedido'}
        </button>
      </form>
    </ModalOverlay>
  );
}
