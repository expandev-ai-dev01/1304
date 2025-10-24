import { Container } from '@/core/components/Container';

/**
 * @page GalleryPage
 * @summary Photo gallery page showcasing previous work
 * @domain gallery
 * @type gallery-page
 * @category public
 *
 * @routing
 * - Path: /galeria
 * - Guards: None (public)
 */
export const GalleryPage = () => {
  return (
    <div className="py-12">
      <Container>
        <h1 className="text-4xl font-display font-bold text-gray-900 mb-8">Galeria de Fotos</h1>

        <div className="text-center py-20">
          <p className="text-xl text-gray-600">Galeria em breve...</p>
        </div>
      </Container>
    </div>
  );
};

export default GalleryPage;
