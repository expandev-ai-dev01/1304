import { Container } from '@/core/components/Container';
import { APP_NAME, SOCIAL_LINKS } from '@/core/constants';

/**
 * @component Footer
 * @summary Application footer with social links and copyright
 * @domain core
 * @type layout-component
 * @category layout
 */
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <Container>
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-600">
                © {currentYear} {APP_NAME}. Todos os direitos reservados.
              </p>
            </div>

            <div className="flex space-x-6">
              <a
                href={SOCIAL_LINKS.INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                Instagram
              </a>
              <a
                href={SOCIAL_LINKS.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
