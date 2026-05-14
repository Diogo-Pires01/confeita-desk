import ModalOverlay from './ModalOverlay';

export default function NewProductModal() {
  return (
    <ModalOverlay title="Cadastrar Produto">
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Nome do produto"
          className="w-full px-3 py-2 rounded-xl bg-dash-card border border-dash-border text-sm text-dash-text-main placeholder:text-dash-text-muted outline-none focus:ring-2 focus:ring-primary"
        />
        <select className="w-full px-2 py-2 rounded-xl bg-dash-card border border-dash-border text-sm text-dash-text-main outline-none focus:ring-2 focus:ring-primary">
          <option value="">Categoria</option>
          <option value="bolos">Bolos</option>
          <option value="tortas">Tortas</option>
          <option value="doces">Doces</option>
        </select>
        <input
          type="number"
          placeholder="Preço (R$)"
          className="w-full px-3 py-2 rounded-xl bg-dash-card border border-dash-border text-sm text-dash-text-main placeholder:text-dash-text-muted outline-none focus:ring-2 focus:ring-primary"
        />
        <textarea
          placeholder="Descrição"
          rows={3}
          className="w-full px-3 py-2 rounded-xl bg-dash-card border border-dash-border text-sm text-dash-text-main placeholder:text-dash-text-muted outline-none focus:ring-2 focus:ring-primary resize-none"
        />
        <button
          type="submit"
          className="w-full py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-xl transition"
        >
          Cadastrar
        </button>
      </form>
    </ModalOverlay>
  );
}
