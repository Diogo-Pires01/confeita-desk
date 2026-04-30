import type { Order } from '../types/order';

function getWeekDay(offset: number): string {
  const d = new Date();
  d.setDate(d.getDate() - d.getDay() + offset);
  return d.toISOString().split('T')[0];
}

export const mockOrders: Order[] = [
  {
    id: '1',
    customer: 'Ana Silva',
    product: 'Bolo de Chocolate',
    date: getWeekDay(1),
    time: '09:00',
    status: 'entregue',
    total: 120,
  },
  {
    id: '2',
    customer: 'Carlos Lima',
    product: 'Torta de Morango',
    date: getWeekDay(1),
    time: '14:00',
    status: 'entregue',
    total: 95,
  },
  {
    id: '3',
    customer: 'Beatriz Souza',
    product: 'Cupcakes (12un)',
    date: getWeekDay(2),
    time: '10:30',
    status: 'entregue',
    total: 72,
  },
  {
    id: '4',
    customer: 'Diego Ramos',
    product: 'Bolo Red Velvet',
    date: getWeekDay(3),
    time: '11:00',
    status: 'pronto',
    total: 150,
  },
  {
    id: '5',
    customer: 'Fernanda Costa',
    product: 'Brigadeiros (50un)',
    date: getWeekDay(3),
    time: '16:00',
    status: 'preparo',
    total: 60,
  },
  {
    id: '6',
    customer: 'Gabriel Nunes',
    product: 'Bolo de Cenoura',
    date: getWeekDay(4),
    time: '09:30',
    status: 'preparo',
    total: 85,
  },
  {
    id: '7',
    customer: 'Helena Dias',
    product: 'Torta Holandesa',
    date: getWeekDay(5),
    time: '13:00',
    status: 'preparo',
    total: 110,
  },
  {
    id: '8',
    customer: 'Igor Martins',
    product: 'Pavlova',
    date: getWeekDay(5),
    time: '17:00',
    status: 'preparo',
    total: 130,
  },
  {
    id: '9',
    customer: 'Julia Ferreira',
    product: 'Cheesecake',
    date: getWeekDay(6),
    time: '10:00',
    status: 'preparo',
    total: 90,
  },
  {
    id: '10',
    customer: 'Lucas Almeida',
    product: 'Bolo Naked',
    date: getWeekDay(6),
    time: '15:00',
    status: 'preparo',
    total: 140,
  },
  {
    id: '11',
    customer: 'Marcelo Nunes',
    product: 'Bolo de Cenoura',
    date: getWeekDay(0),
    time: '08:00',
    status: 'pronto',
    total: 100,
  },
];
