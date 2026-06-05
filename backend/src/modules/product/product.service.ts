import { prisma } from '../../lib/prisma.js';

interface CreateProductDTO {
  name: string;
  description?: string;
  price: number;
}

export const productService = {
  findAll(userId: string) {
    return prisma.product.findMany({ where: { userId } });
  },

  create(userId: string, data: CreateProductDTO) {
    return prisma.product.create({ data: { ...data, userId } });
  },

  update(id: string, userId: string, data: Partial<CreateProductDTO>) {
    return prisma.product.updateMany({ where: { id, userId }, data });
  },

  delete(id: string, userId: string) {
    return prisma.product.deleteMany({ where: { id, userId } });
  },
};
