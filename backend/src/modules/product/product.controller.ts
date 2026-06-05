import type { Request, Response } from 'express';
import { productService } from './product.service.js';

export const productController = {
  async list(req: Request, res: Response) {
    const products = await productService.findAll(req.user!.id);
    res.json(products);
  },

  async create(req: Request, res: Response) {
    const { name, price, description } = req.body;
    if (!name || !price) {
      res.status(400).json({ error: 'name e price são obrigatórios' });
      return;
    }
    const product = await productService.create(req.user!.id, {
      name,
      price,
      description,
    });
    res.status(201).json(product);
  },

  async update(req: Request, res: Response) {
    const { name, price, description } = req.body;
    await productService.update(req.params['id']!, req.user!.id, {
      name,
      price,
      description,
    });
    res.status(204).end();
  },

  async delete(req: Request, res: Response) {
    await productService.delete(req.params['id']!, req.user!.id);
    res.status(204).end();
  },
};
