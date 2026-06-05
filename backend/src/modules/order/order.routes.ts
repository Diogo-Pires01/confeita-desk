import { Router } from 'express';
import { orderController } from './order.controller.js';

const router = Router();

router.get('/', orderController.list);
router.post('/', orderController.create);
router.patch('/:id/status', orderController.updateStatus);
router.delete('/:id', orderController.delete);

export default router;
