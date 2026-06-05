import { prisma } from '../../lib/prisma.js';
import type { OrderStatus } from '@prisma/client';

interface OrderItemDTO {
  productId: string;
  quantity: number;
  unitPrice: number;
}

interface CreateOrderDTO {
  customer: string;
  date: string;
  items: OrderItemDTO[];
}

export const orderService = {
  findAll(userId: string) {
    return prisma.order.findMany({
      where: { userId },
      include: { items: { include: { product: true } } },
      orderBy: { date: 'desc' },
    });
  },

  create(userId: string, data: CreateOrderDTO) {
    const total = data.items.reduce(
      (sum, item) => sum + item.quantity * item.unitPrice,
      0,
    );

    return prisma.order.create({
      data: {
        customer: data.customer,
        date: new Date(data.date),
        total,
        userId,
        items: { create: data.items },
      },
      include: { items: true },
    });
  },

  updateStatus(id: string, userId: string, status: OrderStatus) {
    return prisma.order.updateMany({
      where: { id, userId },
      data: { status },
    });
  },

  delete(id: string, userId: string) {
    return prisma.order.deleteMany({ where: { id, userId } });
  },
};
