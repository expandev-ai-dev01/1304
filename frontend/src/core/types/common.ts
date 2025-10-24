/**
 * @types CommonTypes
 * @summary Common type definitions used across the application
 * @category core-types
 */

export type Size = 'sm' | 'md' | 'lg';

export type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';

export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface ApiError {
  message: string;
  code?: string;
  status?: number;
}
