import { Router } from 'express';
import { productController } from './product.controller.js';

const router = Router();

router.get('/', productController.list);
router.post('/', productController.create);
router.put('/:id', productController.update);
router.delete('/:id', productController.delete);

export default router;
