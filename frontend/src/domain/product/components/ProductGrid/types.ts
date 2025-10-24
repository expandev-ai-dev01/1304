import type { Product } from '../../types';

export interface ProductGridProps {
  products: Product[];
  isLoading: boolean;
  onProductClick: (productId: string) => void;
}
