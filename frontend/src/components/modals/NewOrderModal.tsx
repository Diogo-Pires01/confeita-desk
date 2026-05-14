import ModalOverlay from './ModalOverlay';

export default function NewOrderModal() {
  return (
    <ModalOverlay title="Novo Pedido">
      <form className="flex flex-col gap-5">
        <fieldset className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-dash-text-muted">
            Cliente
          </label>
          <input
            type="text"
            placeholder="Nome do cliente"
            className="w-full px-3 py-2.5 rounded-xl bg-dash-card border border-dash-border text-sm text-dash-text-main placeholder:text-dash-text-muted outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
          />
        </fieldset>

        <fieldset className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-dash-text-muted">
            Produto
          </label>
          <input
            type="text"
            placeholder="Ex: Bolo de Chocolate"
            className="w-full px-3 py-2.5 rounded-xl bg-dash-card border border-dash-border text-sm text-dash-text-main placeholder:text-dash-text-muted outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
          />
        </fieldset>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <fieldset className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-dash-text-muted">
              Data de entrega
            </label>
            <input
              type="date"
              className="w-full px-3 py-2.5 rounded-xl bg-dash-card border border-dash-border text-sm text-dash-text-main outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
            />
          </fieldset>
          <fieldset className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-dash-text-muted">
              Status
            </label>
            <select className="w-full px-3 py-2.5 rounded-xl bg-dash-card border border-dash-border text-sm text-dash-text-main outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition">
              <option value="em_producao">Em Produção</option>
              <option value="pronto">Pronto</option>
              <option value="entregue">Entregue</option>
            </select>
          </fieldset>
        </div>

        <fieldset className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-dash-text-muted">
            Valor
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-dash-text-muted">
              R$
            </span>
            <input
              type="number"
              min="0"
              step="0.01"
              placeholder="0,00"
              className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-dash-card border border-dash-border text-sm text-dash-text-main placeholder:text-dash-text-muted outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
            />
          </div>
        </fieldset>

        <button
          type="submit"
          className="w-full py-2.5 mt-1 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-xl transition"
        >
          Criar Pedido
        </button>
      </form>
    </ModalOverlay>
  );
}
