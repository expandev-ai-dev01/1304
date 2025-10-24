import type { Product } from '../../types';

export interface ProductCardProps {
  product: Product;
  onClick?: (productId: string) => void;
}
