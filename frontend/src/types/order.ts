export type OrderStatus = 'preparo' | 'pronto' | 'entregue';

export interface Order {
  id: string;
  customer: string;
  product: string;
  date: string;
  time: string;
  status: OrderStatus;
  total: number;
}
