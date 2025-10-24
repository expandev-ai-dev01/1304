/**
 * @constants AppConstants
 * @summary Global application constants
 * @category core
 */

export const APP_NAME = import.meta.env.VITE_APP_NAME || 'Lene Cakes';
export const APP_DESCRIPTION =
  import.meta.env.VITE_APP_DESCRIPTION || 'Bolos artesanais personalizados';

export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '5511999999999';
export const WHATSAPP_DEFAULT_MESSAGE =
  import.meta.env.VITE_WHATSAPP_MESSAGE || 'Olá! Gostaria de fazer um orçamento.';

export const ROUTES = {
  HOME: '/',
  CATALOG: '/catalogo',
  GALLERY: '/galeria',
  CONTACT: '/contato',
} as const;

export const SOCIAL_LINKS = {
  INSTAGRAM: 'https://instagram.com/lenecakes',
  FACEBOOK: 'https://facebook.com/lenecakes',
} as const;
