import ModalOverlay from './ModalOverlay';

export default function NewTransactionModal() {
  return (
    <ModalOverlay title="Nova Transação">
      <form className="flex flex-col gap-4">
        <select className="w-full px-3 py-2 rounded-xl bg-dash-card border border-dash-border text-sm text-dash-text-main outline-none focus:ring-2 focus:ring-primary">
          <option value="entrada">Entrada</option>
          <option value="saida">Saída</option>
        </select>
        <input
          type="text"
          placeholder="Descrição"
          className="w-full px-3 py-2 rounded-xl bg-dash-card border border-dash-border text-sm text-dash-text-main placeholder:text-dash-text-muted outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="number"
          placeholder="Valor (R$)"
          className="w-full px-3 py-2 rounded-xl bg-dash-card border border-dash-border text-sm text-dash-text-main placeholder:text-dash-text-muted outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="date"
          className="w-full px-3 py-2 rounded-xl bg-dash-card border border-dash-border text-sm text-dash-text-main outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          type="submit"
          className="w-full py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-xl transition"
        >
          Registrar
        </button>
      </form>
    </ModalOverlay>
  );
}
