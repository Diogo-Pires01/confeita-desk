import { prisma } from '../../lib/prisma.js';
import type { TransactionType } from '@prisma/client';

interface CreateTransactionDTO {
  description: string;
  type: TransactionType;
  value: number;
  date: string;
  orderId?: string;
}

export const transactionService = {
  findAll(userId: string) {
    return prisma.transaction.findMany({
      where: { userId },
      orderBy: { date: 'desc' },
    });
  },

  create(userId: string, data: CreateTransactionDTO) {
    return prisma.transaction.create({
      data: {
        description: data.description,
        type: data.type,
        value: data.value,
        date: new Date(data.date),
        orderId: data.orderId ?? null,
        userId,
      },
    });
  },

  delete(id: string, userId: string) {
    return prisma.transaction.deleteMany({ where: { id, userId } });
  },
};
