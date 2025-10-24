import { WHATSAPP_NUMBER, WHATSAPP_DEFAULT_MESSAGE } from '@/core/constants';

/**
 * @utility generateWhatsAppLink
 * @summary Generates a WhatsApp link with pre-filled message
 * @category core-utility
 *
 * @param message - Custom message to send (optional)
 * @returns WhatsApp web link
 */
export const generateWhatsAppLink = (message?: string): string => {
  const encodedMessage = encodeURIComponent(message || WHATSAPP_DEFAULT_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

/**
 * @utility openWhatsApp
 * @summary Opens WhatsApp in a new window with pre-filled message
 * @category core-utility
 *
 * @param message - Custom message to send (optional)
 */
export const openWhatsApp = (message?: string): void => {
  const link = generateWhatsAppLink(message);
  window.open(link, '_blank', 'noopener,noreferrer');
};
