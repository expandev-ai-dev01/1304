import { Router } from 'express';
import * as productController from '@/api/v1/external/product/controller';

const router = Router();

/**
 * @route GET /api/v1/external/product
 * @description List all active products with optional filters
 * @access Public
 */
router.get('/product', productController.listHandler);

/**
 * @route GET /api/v1/external/product/:id
 * @description Get detailed information about a specific product
 * @access Public
 */
router.get('/product/:id', productController.getHandler);

export default router;
