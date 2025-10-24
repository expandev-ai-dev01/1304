import { useNavigate } from 'react-router-dom';
import { Container } from '@/core/components/Container';
import { Button } from '@/core/components/Button';
import { ROUTES } from '@/core/constants';

/**
 * @page NotFoundPage
 * @summary 404 error page for non-existent routes
 * @domain core
 * @type error-page
 * @category public
 *
 * @routing
 * - Path: *
 * - Guards: None (public)
 */
export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="py-20">
      <Container maxWidth="md">
        <div className="text-center">
          <h1 className="text-6xl font-display font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Página não encontrada</h2>
          <p className="text-gray-600 mb-8">
            Desculpe, a página que você está procurando não existe.
          </p>
          <Button onClick={() => navigate(ROUTES.HOME)}>Voltar para Início</Button>
        </div>
      </Container>
    </div>
  );
};

export default NotFoundPage;
