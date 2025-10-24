import { useQuery } from '@tanstack/react-query';
import { productService } from '../../services/productService';
import type { UseProductListOptions, UseProductListReturn } from './types';

/**
 * @hook useProductList
 * @summary Manages product list with filters and pagination
 * @domain product
 * @type domain-hook
 * @category data
 */
export const useProductList = (options: UseProductListOptions = {}): UseProductListReturn => {
  const {
    search,
    semGluten,
    semLactose,
    semFrutosSecos,
    page = 1,
    pageSize = 12,
    enabled = true,
  } = options;

  const queryKey = ['products', { search, semGluten, semLactose, semFrutosSecos, page, pageSize }];

  const { data, isLoading, error, refetch } = useQuery({
    queryKey,
    queryFn: () =>
      productService.list({
        search,
        semGluten,
        semLactose,
        semFrutosSecos,
        page,
        pageSize,
      }),
    enabled,
    staleTime: 2 * 60 * 1000,
  });

  return {
    products: data?.data || [],
    isLoading,
    error: error as Error | null,
    total: data?.total || 0,
    page: data?.page || page,
    pageSize: data?.pageSize || pageSize,
    totalPages: data?.totalPages || 0,
    refetch,
  };
};
