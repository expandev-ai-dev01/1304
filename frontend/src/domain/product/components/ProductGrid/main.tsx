import { ProductCard } from '../ProductCard';
import { LoadingSpinner } from '@/core/components/LoadingSpinner';
import type { ProductGridProps } from './types';

/**
 * @component ProductGrid
 * @summary Grid layout for product cards
 * @domain product
 * @type ui-component
 * @category display
 */
export const ProductGrid = ({ products, isLoading, onProductClick }: ProductGridProps) => {
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-gray-600">
          Nenhum produto encontrado com os filtros selecionados.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id_produto} product={product} onClick={onProductClick} />
      ))}
    </div>
  );
};
