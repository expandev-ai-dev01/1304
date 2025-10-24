import { Container } from '@/core/components/Container';
import { Button } from '@/core/components/Button';
import { openWhatsApp } from '@/core/utils';
import { APP_NAME } from '@/core/constants';

/**
 * @page HomePage
 * @summary Landing page with hero section and call-to-action
 * @domain public
 * @type landing-page
 * @category public
 *
 * @routing
 * - Path: /
 * - Guards: None (public)
 */
export const HomePage = () => {
  const handleWhatsAppClick = () => {
    openWhatsApp('Olá! Gostaria de conhecer mais sobre os bolos.');
  };

  return (
    <div className="bg-gradient-to-b from-pink-50 to-white">
      <Container maxWidth="xl">
        <div className="py-20 md:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Bolos Artesanais
              <span className="block text-primary-600">Feitos com Amor</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Transformamos momentos especiais em memórias deliciosas. Bolos personalizados para
              todas as ocasiões.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={handleWhatsAppClick}>
                Fazer Pedido
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => (window.location.href = '/catalogo')}
              >
                Ver Catálogo
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
