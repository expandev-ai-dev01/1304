import { Container } from '@/core/components/Container';
import { Button } from '@/core/components/Button';
import { openWhatsApp } from '@/core/utils';

/**
 * @page ContactPage
 * @summary Contact information page with business hours and WhatsApp
 * @domain contact
 * @type info-page
 * @category public
 *
 * @routing
 * - Path: /contato
 * - Guards: None (public)
 */
export const ContactPage = () => {
  return (
    <div className="py-12">
      <Container maxWidth="md">
        <h1 className="text-4xl font-display font-bold text-gray-900 mb-8">Entre em Contato</h1>

        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-display font-semibold text-gray-900 mb-4">
              Horário de Atendimento
            </h2>
            <p className="text-gray-600">
              Segunda a Sexta: 9h às 18h
              <br />
              Sábado: 9h às 13h
              <br />
              Domingo: Fechado
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display font-semibold text-gray-900 mb-4">
              Prazos para Encomendas
            </h2>
            <p className="text-gray-600">
              Pedidos devem ser feitos com no mínimo 48 horas de antecedência. Para bolos
              personalizados, recomendamos 5 dias de antecedência.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display font-semibold text-gray-900 mb-4">Entregas</h2>
            <p className="text-gray-600">
              Realizamos entregas na região. Consulte disponibilidade e valores.
            </p>
          </div>

          <div className="pt-4">
            <Button
              size="lg"
              fullWidth
              onClick={() => openWhatsApp('Olá! Gostaria de mais informações.')}
            >
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
