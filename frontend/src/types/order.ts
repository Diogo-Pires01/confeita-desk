export type OrderStatus = 'preparo' | 'pronto' | 'entregue';

export interface OrderItem {
  id: string;
  productId: string;
  quantity: number;
  unitPrice: number;
  product: {
    id: string;
    name: string;
  };
}

export interface Order {
  id: string;
  customer: string;
  date: string;
  status: OrderStatus;
  total: number;
  items: OrderItem[];
}
