export interface Transaction {
  id: number;
  description: string;
  type: 'entrada' | 'saida' | 'cancelamento';
  value: number;
  date: string;
}

export const mockTransactions: Transaction[] = [
  { id: 1, description: 'Bolo de aniversário - Maria', type: 'entrada', value: 150, date: '2024-12-20' },
  { id: 2, description: 'Compra mercado - ingredientes', type: 'saida', value: 87.5, date: '2024-12-19' },
  { id: 3, description: 'Kit brigadeiros - João', type: 'entrada', value: 60, date: '2024-12-18' },
  { id: 4, description: 'Cancelamento - Pedido #12', type: 'cancelamento', value: 45, date: '2024-12-17' },
  { id: 5, description: 'Torta de morango - Ana', type: 'entrada', value: 120, date: '2024-12-16' },
  { id: 6, description: 'Compra mercado - embalagens', type: 'saida', value: 35, date: '2024-12-15' },
];
