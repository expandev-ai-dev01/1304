import { publicClient } from '@/core/lib/api';
import type { Product, ProductListParams, ProductListResponse } from '../types';

/**
 * @service productService
 * @summary Product service for public API endpoints
 * @domain product
 * @type rest-service
 * @apiContext external
 *
 * @description
 * All methods in this service use publicClient which targets:
 * /api/v1/external/product/...
 */
export const productService = {
  /**
   * @endpoint GET /api/v1/external/product
   * @summary Fetches list of active products with optional filters
   */
  async list(params: ProductListParams): Promise<ProductListResponse> {
    const response = await publicClient.get('/product', { params });
    return response.data;
  },

  /**
   * @endpoint GET /api/v1/external/product/:id
   * @summary Fetches single product by ID
   */
  async getById(id: string): Promise<Product> {
    const response = await publicClient.get(`/product/${id}`);
    return response.data.data;
  },
};
