import { formatCurrency } from '@/core/utils/format';
import type { ProductCardProps } from './types';

/**
 * @component ProductCard
 * @summary Product card component for catalog grid
 * @domain product
 * @type ui-component
 * @category display
 */
export const ProductCard = ({ product, onClick }: ProductCardProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick(product.id_produto);
    }
  };

  const mainImage = product.imagens[0] || '/placeholder-cake.jpg';

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105 hover:shadow-lg"
    >
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={mainImage}
          alt={product.nome}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-4">
        {product.destaque && (
          <span className="inline-block bg-primary-100 text-primary-700 text-xs font-semibold px-2 py-1 rounded mb-2">
            Destaque
          </span>
        )}

        <h3 className="text-lg font-display font-semibold text-gray-900 mb-2">{product.nome}</h3>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.descricao}</p>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary-600">
            {formatCurrency(product.preco)}
          </span>
          <span className="text-sm text-gray-500">{product.tamanho}</span>
        </div>

        <div className="flex gap-2 mt-3">
          {!product.contem_gluten && (
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
              Sem Glúten
            </span>
          )}
          {!product.contem_lactose && (
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Sem Lactose</span>
          )}
          {!product.contem_frutos_secos && (
            <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
              Sem Nozes
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
