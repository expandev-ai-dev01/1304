import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '@/core/components/Container';
import { useProductList } from '@/domain/product/hooks/useProductList';
import { ProductFilters } from '@/domain/product/components/ProductFilters';
import { ProductGrid } from '@/domain/product/components/ProductGrid';

/**
 * @page CatalogPage
 * @summary Product catalog page displaying available cakes with filters
 * @domain catalog
 * @type list-page
 * @category public
 *
 * @routing
 * - Path: /catalogo
 * - Guards: None (public)
 */
export const CatalogPage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [semGluten, setSemGluten] = useState(false);
  const [semLactose, setSemLactose] = useState(false);
  const [semFrutosSecos, setSemFrutosSecos] = useState(false);

  const { products, isLoading, total } = useProductList({
    search: search.length >= 3 ? search : undefined,
    semGluten,
    semLactose,
    semFrutosSecos,
    page: 1,
    pageSize: 12,
  });

  const handleClearFilters = () => {
    setSearch('');
    setSemGluten(false);
    setSemLactose(false);
    setSemFrutosSecos(false);
  };

  const handleProductClick = (productId: string) => {
    navigate(`/catalogo/${productId}`);
  };

  return (
    <div className="py-12">
      <Container>
        <div className="mb-8">
          <h1 className="text-4xl font-display font-bold text-gray-900 mb-2">Nosso Catálogo</h1>
          <p className="text-lg text-gray-600">
            {total} {total === 1 ? 'bolo disponível' : 'bolos disponíveis'}
          </p>
        </div>

        <ProductFilters
          search={search}
          semGluten={semGluten}
          semLactose={semLactose}
          semFrutosSecos={semFrutosSecos}
          onSearchChange={setSearch}
          onSemGlutenChange={setSemGluten}
          onSemLactoseChange={setSemLactose}
          onSemFrutosSecosChange={setSemFrutosSecos}
          onClearFilters={handleClearFilters}
        />

        <ProductGrid
          products={products}
          isLoading={isLoading}
          onProductClick={handleProductClick}
        />
      </Container>
    </div>
  );
};

export default CatalogPage;
