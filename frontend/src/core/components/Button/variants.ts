import { clsx } from 'clsx';
import type { ButtonProps } from './types';

export function getButtonClassName(props: Partial<ButtonProps>): string {
  const { variant = 'primary', size = 'md', fullWidth = false, className } = props;

  return clsx(
    'inline-flex items-center justify-center rounded-lg font-medium transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:pointer-events-none',
    {
      'bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-500':
        variant === 'primary',
      'bg-secondary-600 text-white hover:bg-secondary-700 focus-visible:ring-secondary-500':
        variant === 'secondary',
      'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus-visible:ring-primary-500':
        variant === 'outline',
      'bg-transparent hover:bg-gray-100 focus-visible:ring-gray-500': variant === 'ghost',
    },
    {
      'h-9 px-4 text-sm': size === 'sm',
      'h-11 px-6 text-base': size === 'md',
      'h-13 px-8 text-lg': size === 'lg',
    },
    {
      'w-full': fullWidth,
    },
    className
  );
}
