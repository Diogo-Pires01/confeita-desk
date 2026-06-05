import { useState, useEffect, useCallback } from 'react';
import api from '../services/api';

export interface Transaction {
  id: string;
  description: string;
  type: 'entrada' | 'saida' | 'cancelamento';
  value: number;
  date: string;
  orderId?: string;
}

export function useTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  const fetch = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await api.get<Transaction[]>('/transactions');
      setTransactions(data);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetch(); }, [fetch]);

  return { transactions, loading, refetch: fetch };
}
