import {
  Wallet as WalletIcon,
  TrendingUp,
  TrendingDown,
  Plus,
  Minus,
} from 'lucide-react';
import { mockTransactions } from '../../mocks/wallet';
import { useModal } from '../../contexts/ModalContext';

const totalEntradas = mockTransactions
  .filter((t) => t.type === 'entrada')
  .reduce((s, t) => s + t.value, 0);
const totalSaidas = mockTransactions
  .filter((t) => t.type !== 'entrada')
  .reduce((s, t) => s + t.value, 0);
const saldo = totalEntradas - totalSaidas;

const typeStyles = {
  entrada: 'text-green-400',
  saida: 'text-red-400',
  cancelamento: 'text-yellow-400',
};

const typeLabels = {
  entrada: 'Entrada',
  saida: 'Saída',
  cancelamento: 'Cancelamento',
};

export default function Wallet() {
  const { open } = useModal();
  return (
    <div className="space-y-6">
      <h1 className="text-xl md:text-2xl font-semibold text-dash-text-main">
        Carteira
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center gap-4 bg-dash-surface border border-dash-border rounded-xl p-4">
          <div className="p-3 rounded-xl bg-primary">
            <WalletIcon size={20} className="text-white" />
          </div>
          <div>
            <p className="text-2xl font-semibold text-dash-text-main">
              R$ {saldo.toFixed(2)}
            </p>
            <p className="text-sm text-dash-text-muted">Saldo</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-dash-surface border border-dash-border rounded-xl p-4">
          <div className="p-3 rounded-xl bg-green-500">
            <TrendingUp size={20} className="text-white" />
          </div>
          <div>
            <p className="text-2xl font-semibold text-dash-text-main">
              R$ {totalEntradas.toFixed(2)}
            </p>
            <p className="text-sm text-dash-text-muted">Entradas</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-dash-surface border border-dash-border rounded-xl p-4">
          <div className="p-3 rounded-xl bg-red-500">
            <TrendingDown size={20} className="text-white" />
          </div>
          <div>
            <p className="text-2xl font-semibold text-dash-text-main">
              R$ {totalSaidas.toFixed(2)}
            </p>
            <p className="text-sm text-dash-text-muted">Saídas</p>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => open('newTransaction')}
          className="flex items-center gap-2 px-4 py-2 border border-dash-border rounded-lg text-sm font-medium text-dash-text-main hover:bg-dash-hover transition"
        >
          <Plus size={16} /> Nova Transação
        </button>
      </div>

      <div className="bg-dash-surface border border-dash-border rounded-xl overflow-hidden">
        <div className="px-5 py-4 border-b border-dash-border">
          <h2 className="text-lg font-medium text-dash-text-main">Histórico</h2>
        </div>
        <div className="divide-y divide-dash-border">
          {mockTransactions.map((t) => (
            <div
              key={t.id}
              className="flex items-center justify-between px-5 py-3"
            >
              <div>
                <p className="text-sm text-dash-text-main">{t.description}</p>
                <p className="text-xs text-dash-text-muted">
                  {t.date.split('-').reverse().join('/')} · {typeLabels[t.type]}
                </p>
              </div>
              <span className={`text-sm font-medium ${typeStyles[t.type]}`}>
                {t.type === 'entrada' ? '+' : '-'} R$ {t.value.toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
