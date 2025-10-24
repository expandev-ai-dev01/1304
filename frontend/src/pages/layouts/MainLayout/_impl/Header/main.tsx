import { Link } from 'react-router-dom';
import { Container } from '@/core/components/Container';
import { APP_NAME, ROUTES } from '@/core/constants';

/**
 * @component Header
 * @summary Application header with navigation
 * @domain core
 * @type layout-component
 * @category navigation
 */
export const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between h-16">
          <Link to={ROUTES.HOME} className="text-2xl font-display font-bold text-primary-600">
            {APP_NAME}
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to={ROUTES.HOME}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Início
            </Link>
            <Link
              to={ROUTES.CATALOG}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Catálogo
            </Link>
            <Link
              to={ROUTES.GALLERY}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Galeria
            </Link>
            <Link
              to={ROUTES.CONTACT}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Contato
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
};
