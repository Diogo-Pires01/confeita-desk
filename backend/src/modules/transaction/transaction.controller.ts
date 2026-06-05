import type { Request, Response } from 'express';
import { transactionService } from './transaction.service.js';

export const transactionController = {
  async list(req: Request, res: Response) {
    const transactions = await transactionService.findAll(req.user!.id);
    res.json(transactions);
  },

  async create(req: Request, res: Response) {
    const { description, type, value, date, orderId } = req.body;
    if (!description || !type || !value || !date) {
      res.status(400).json({ error: 'description, type, value e date são obrigatórios' });
      return;
    }
    const transaction = await transactionService.create(req.user!.id, {
      description,
      type,
      value,
      date,
      orderId,
    });
    res.status(201).json(transaction);
  },

  async delete(req: Request, res: Response) {
    await transactionService.delete(req.params['id']!, req.user!.id);
    res.status(204).end();
  },
};
