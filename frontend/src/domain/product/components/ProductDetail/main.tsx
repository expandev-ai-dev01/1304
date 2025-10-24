import { useState } from 'react';
import { formatCurrency } from '@/core/utils/format';
import { Button } from '@/core/components/Button';
import type { ProductDetailProps } from './types';

/**
 * @component ProductDetail
 * @summary Detailed product view with image carousel
 * @domain product
 * @type ui-component
 * @category display
 */
export const ProductDetail = ({ product, onWhatsAppClick }: ProductDetailProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.imagens.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.imagens.length) % product.imagens.length);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative">
          <div className="aspect-square bg-gray-100">
            <img
              src={product.imagens[currentImageIndex] || '/placeholder-cake.jpg'}
              alt={`${product.nome} - Imagem ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </div>

          {product.imagens.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
                aria-label="Imagem anterior"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
                aria-label="Próxima imagem"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {product.imagens.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                    aria-label={`Ver imagem ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="p-8">
          {product.destaque && (
            <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-3 py-1 rounded mb-4">
              Produto em Destaque
            </span>
          )}

          <h1 className="text-3xl font-display font-bold text-gray-900 mb-4">{product.nome}</h1>

          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-4xl font-bold text-primary-600">
              {formatCurrency(product.preco)}
            </span>
            <span className="text-lg text-gray-600">{product.tamanho}</span>
          </div>

          <div className="space-y-6 mb-8">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Descrição</h2>
              <p className="text-gray-700">{product.descricao}</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Ingredientes</h2>
              <p className="text-gray-700">{product.ingredientes}</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Informações Nutricionais</h2>
              <div className="flex flex-wrap gap-2">
                {product.contem_gluten ? (
                  <span className="inline-flex items-center bg-red-100 text-red-700 text-sm px-3 py-1 rounded">
                    Contém Glúten
                  </span>
                ) : (
                  <span className="inline-flex items-center bg-green-100 text-green-700 text-sm px-3 py-1 rounded">
                    Sem Glúten
                  </span>
                )}

                {product.contem_lactose ? (
                  <span className="inline-flex items-center bg-red-100 text-red-700 text-sm px-3 py-1 rounded">
                    Contém Lactose
                  </span>
                ) : (
                  <span className="inline-flex items-center bg-green-100 text-green-700 text-sm px-3 py-1 rounded">
                    Sem Lactose
                  </span>
                )}

                {product.contem_frutos_secos ? (
                  <span className="inline-flex items-center bg-red-100 text-red-700 text-sm px-3 py-1 rounded">
                    Contém Frutos Secos
                  </span>
                ) : (
                  <span className="inline-flex items-center bg-green-100 text-green-700 text-sm px-3 py-1 rounded">
                    Sem Frutos Secos
                  </span>
                )}
              </div>
            </div>
          </div>

          <Button size="lg" fullWidth onClick={onWhatsAppClick}>
            Fazer Pedido via WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
};
