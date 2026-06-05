import type { Request, Response } from 'express';
import { orderService } from './order.service.js';

export const orderController = {
  async list(req: Request, res: Response) {
    const orders = await orderService.findAll(req.user!.id);
    res.json(orders);
  },

  async create(req: Request, res: Response) {
    const { customer, date, items } = req.body;
    if (!customer || !date || !items?.length) {
      res.status(400).json({ error: 'customer, date e items são obrigatórios' });
      return;
    }
    const order = await orderService.create(req.user!.id, {
      customer,
      date,
      items,
    });
    res.status(201).json(order);
  },

  async updateStatus(req: Request, res: Response) {
    const { status } = req.body;
    if (!status) {
      res.status(400).json({ error: 'status é obrigatório' });
      return;
    }
    await orderService.updateStatus(req.params['id']!, req.user!.id, status);
    res.status(204).end();
  },

  async delete(req: Request, res: Response) {
    await orderService.delete(req.params['id']!, req.user!.id);
    res.status(204).end();
  },
};
