/**
 * @utility formatCurrency
 * @summary Formats a number as Brazilian Real currency
 * @category core-utility
 *
 * @param value - Numeric value to format
 * @returns Formatted currency string
 */
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

/**
 * @utility formatPhone
 * @summary Formats a phone number in Brazilian format
 * @category core-utility
 *
 * @param phone - Phone number string
 * @returns Formatted phone string
 */
export const formatPhone = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');

  if (cleaned.length === 11) {
    return cleaned.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }

  if (cleaned.length === 10) {
    return cleaned.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  }

  return phone;
};
