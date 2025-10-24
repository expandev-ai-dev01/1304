/**
 * @summary
 * Global TypeScript type definitions
 *
 * @module types
 */

/**
 * @interface ApiResponse
 * @description Standard API response structure
 */
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    details?: any;
    timestamp: string;
  };
  metadata?: {
    timestamp: string;
    [key: string]: any;
  };
}

/**
 * @interface PaginatedResponse
 * @description Paginated API response structure
 */
export interface PaginatedResponse<T = any> {
  success: boolean;
  data: T[];
  metadata: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrevious: boolean;
    timestamp: string;
  };
}

/**
 * @interface PaginationParams
 * @description Standard pagination parameters
 */
export interface PaginationParams {
  page?: number;
  pageSize?: number;
}

/**
 * @interface BaseEntity
 * @description Base entity structure for all data models
 */
export interface BaseEntity {
  id: number;
  dateCreated: Date;
  dateModified: Date;
  deleted: boolean;
}
