import { Container } from '@/core/components/Container';

/**
 * @page CatalogPage
 * @summary Product catalog page displaying available cakes
 * @domain catalog
 * @type list-page
 * @category public
 *
 * @routing
 * - Path: /catalogo
 * - Guards: None (public)
 */
export const CatalogPage = () => {
  return (
    <div className="py-12">
      <Container>
        <h1 className="text-4xl font-display font-bold text-gray-900 mb-8">Nosso Catálogo</h1>

        <div className="text-center py-20">
          <p className="text-xl text-gray-600">Catálogo em breve...</p>
        </div>
      </Container>
    </div>
  );
};

export default CatalogPage;
