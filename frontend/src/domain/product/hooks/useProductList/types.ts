import type { Product, ProductListParams } from '../../types';

export interface UseProductListOptions extends ProductListParams {
  enabled?: boolean;
}

export interface UseProductListReturn {
  products: Product[];
  isLoading: boolean;
  error: Error | null;
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
  refetch: () => void;
}
