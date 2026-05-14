import ModalOverlay from './ModalOverlay';

export default function NewProductModal() {
  return (
    <ModalOverlay title="Cadastrar Produto">
      <form className="flex flex-col gap-5">
        <fieldset className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-dash-text-muted">
            Nome
          </label>
          <input
            type="text"
            placeholder="Ex: Bolo Red Velvet"
            className="w-full px-3 py-2.5 rounded-xl bg-dash-card border border-dash-border text-sm text-dash-text-main placeholder:text-dash-text-muted outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
          />
        </fieldset>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <fieldset className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-dash-text-muted">
              Categoria
            </label>
            <select className="w-full px-3 py-2.5 rounded-xl bg-dash-card border border-dash-border text-sm text-dash-text-main outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition">
              <option value="">Selecione</option>
              <option value="bolos">Bolos</option>
              <option value="tortas">Tortas</option>
              <option value="doces">Doces</option>
            </select>
          </fieldset>
          <fieldset className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-dash-text-muted">
              Preço
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
        </div>

        <fieldset className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-dash-text-muted">
            Descrição
          </label>
          <textarea
            placeholder="Breve descrição do produto"
            rows={3}
            className="w-full px-3 py-2.5 rounded-xl bg-dash-card border border-dash-border text-sm text-dash-text-main placeholder:text-dash-text-muted outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition resize-none"
          />
        </fieldset>

        <button
          type="submit"
          className="w-full py-2.5 mt-1 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-xl transition"
        >
          Cadastrar
        </button>
      </form>
    </ModalOverlay>
  );
}
