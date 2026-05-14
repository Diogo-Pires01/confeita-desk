import ModalOverlay from './ModalOverlay';

export default function NewOrderModal() {
  return (
    <ModalOverlay title="Novo Pedido">
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Cliente"
          className="w-full px-3 py-2 rounded-xl bg-dash-card border border-dash-border text-sm text-dash-text-main placeholder:text-dash-text-muted outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="text"
          placeholder="Produto"
          className="w-full px-3 py-2 rounded-xl bg-dash-card border border-dash-border text-sm text-dash-text-main placeholder:text-dash-text-muted outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="date"
          className="w-full px-3 py-2 rounded-xl bg-dash-card border border-dash-border text-sm text-dash-text-main outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="number"
          placeholder="Valor (R$)"
          className="w-full px-3 py-2 rounded-xl bg-dash-card border border-dash-border text-sm text-dash-text-main placeholder:text-dash-text-muted outline-none focus:ring-2 focus:ring-primary"
        />
        <select className="w-full px-2 py-2 rounded-xl bg-dash-card border border-dash-border text-sm text-dash-text-main outline-none focus:ring-2 focus:ring-primary">
          <option value="">Status</option>
          <option value="bolos">Em preparo</option>
          <option value="tortas">Pronto</option>
          <option value="doces">Entregue</option>
        </select>
        <button
          type="submit"
          className="w-full py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-xl transition"
        >
          Criar Pedido
        </button>
      </form>
    </ModalOverlay>
  );
}
