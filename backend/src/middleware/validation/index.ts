import { Request, Response, NextFunction } from 'express';
import { ZodSchema, ZodError } from 'zod';
import { errorResponse } from '@/utils/response';

/**
 * @summary
 * Request validation middleware factory
 *
 * @function validationMiddleware
 * @module middleware/validation
 *
 * @param {ZodSchema} schema - Zod validation schema
 *
 * @returns {Function} Express middleware function
 *
 * @example
 * router.post('/product', validationMiddleware(productSchema), controller.createHandler);
 */
export function validationMiddleware(schema: ZodSchema) {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      req.body = await schema.parseAsync(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json(
          errorResponse('Validation failed', {
            errors: error.errors.map((err) => ({
              field: err.path.join('.'),
              message: err.message,
            })),
          })
        );
      } else {
        next(error);
      }
    }
  };
}
