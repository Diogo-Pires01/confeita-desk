import { Router } from 'express';
import { transactionController } from './transaction.controller.js';

const router = Router();

router.get('/', transactionController.list);
router.post('/', transactionController.create);
router.delete('/:id', transactionController.delete);

export default router;
