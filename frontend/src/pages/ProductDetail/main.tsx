import { useParams, useNavigate } from 'react-router-dom';
import { Container } from '@/core/components/Container';
import { Button } from '@/core/components/Button';
import { LoadingSpinner } from '@/core/components/LoadingSpinner';
import { useProductDetail } from '@/domain/product/hooks/useProductDetail';
import { ProductDetail } from '@/domain/product/components/ProductDetail';
import { openWhatsApp } from '@/core/utils';

/**
 * @page ProductDetailPage
 * @summary Product detail page with full information and WhatsApp contact
 * @domain product
 * @type detail-page
 * @category public
 *
 * @routing
 * - Path: /catalogo/:id
 * - Params: { id: string }
 * - Guards: None (public)
 */
export const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { product, isLoading, error } = useProductDetail({
    productId: id!,
    enabled: !!id,
  });

  const handleWhatsAppClick = () => {
    if (product) {
      const message = `Olá! Vi o bolo ${product.nome} no site e gostaria de mais informações.`;
      openWhatsApp(message);
    }
  };

  const handleBackToCatalog = () => {
    navigate('/catalogo');
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error || !product) {
    return (
      <div className="py-20">
        <Container maxWidth="md">
          <div className="text-center">
            <h1 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Produto não encontrado
            </h1>
            <p className="text-gray-600 mb-8">
              O produto que você está procurando não existe ou não está mais disponível.
            </p>
            <Button onClick={handleBackToCatalog}>Voltar ao Catálogo</Button>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="py-12">
      <Container>
        <button
          onClick={handleBackToCatalog}
          className="flex items-center text-gray-600 hover:text-primary-600 mb-6 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Voltar ao Catálogo
        </button>

        <ProductDetail product={product} onWhatsAppClick={handleWhatsAppClick} />
      </Container>
    </div>
  );
};

export default ProductDetailPage;
