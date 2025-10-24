import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { successResponse, errorResponse, paginatedResponse } from '@/utils/response';
import { productList, productGet } from '@/services/product';
import { zPositiveInteger, zString, zBoolean } from '@/utils/validation';

/**
 * @api {get} /external/product List Products
 * @apiName ListProducts
 * @apiGroup Product
 * @apiVersion 1.0.0
 *
 * @apiDescription Lists all active products with optional filters
 *
 * @apiParam {String} [search] Search term for name or description
 * @apiParam {Boolean} [semGluten] Filter products without gluten
 * @apiParam {Boolean} [semLactose] Filter products without lactose
 * @apiParam {Boolean} [semFrutosSecos] Filter products without nuts
 * @apiParam {Number} [page=1] Page number
 * @apiParam {Number} [pageSize=12] Items per page
 *
 * @apiSuccess {Array} data Array of products
 * @apiSuccess {Object} metadata Pagination metadata
 *
 * @apiError {String} ValidationError Invalid parameters provided
 * @apiError {String} ServerError Internal server error
 */
export async function listHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  const querySchema = z.object({
    search: z.string().min(3).optional(),
    semGluten: z
      .enum(['true', 'false'])
      .transform((val) => val === 'true')
      .optional(),
    semLactose: z
      .enum(['true', 'false'])
      .transform((val) => val === 'true')
      .optional(),
    semFrutosSecos: z
      .enum(['true', 'false'])
      .transform((val) => val === 'true')
      .optional(),
    page: z.coerce.number().int().positive().optional().default(1),
    pageSize: z.coerce.number().int().positive().max(50).optional().default(12),
  });

  try {
    const validated = querySchema.parse(req.query);

    const result = await productList({
      search: validated.search,
      semGluten: validated.semGluten,
      semLactose: validated.semLactose,
      semFrutosSecos: validated.semFrutosSecos,
      page: validated.page,
      pageSize: validated.pageSize,
    });

    res.json(paginatedResponse(result.data, validated.page, validated.pageSize, result.total));
  } catch (error: any) {
    if (error.name === 'ZodError') {
      res.status(400).json(errorResponse('Validation failed', error.errors));
    } else {
      next(error);
    }
  }
}

/**
 * @api {get} /external/product/:id Get Product
 * @apiName GetProduct
 * @apiGroup Product
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets detailed information about a specific product
 *
 * @apiParam {String} id Product UUID
 *
 * @apiSuccess {Object} data Product details
 *
 * @apiError {String} NotFound Product not found
 * @apiError {String} ValidationError Invalid product ID
 * @apiError {String} ServerError Internal server error
 */
export async function getHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  const paramsSchema = z.object({
    id: z.string().uuid('Invalid product ID'),
  });

  try {
    const validated = paramsSchema.parse(req.params);

    const product = await productGet(validated.id);

    if (!product) {
      res.status(404).json(errorResponse('Product not found'));
      return;
    }

    res.json(successResponse(product));
  } catch (error: any) {
    if (error.name === 'ZodError') {
      res.status(400).json(errorResponse('Validation failed', error.errors));
    } else {
      next(error);
    }
  }
}
