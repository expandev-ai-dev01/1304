import { clsx } from 'clsx';
import type { ContainerProps } from './types';

/**
 * @component Container
 * @summary Responsive container component for content layout
 * @domain core
 * @type layout-component
 * @category layout
 */
export const Container = ({ children, className, maxWidth = 'lg' }: ContainerProps) => {
  return (
    <div
      className={clsx(
        'mx-auto px-4 sm:px-6 lg:px-8',
        {
          'max-w-screen-sm': maxWidth === 'sm',
          'max-w-screen-md': maxWidth === 'md',
          'max-w-screen-lg': maxWidth === 'lg',
          'max-w-screen-xl': maxWidth === 'xl',
          'max-w-full': maxWidth === 'full',
        },
        className
      )}
    >
      {children}
    </div>
  );
};
