/**
 * @summary
 * Standard success response format
 *
 * @function successResponse
 * @module utils/response
 *
 * @param {T} data - Response data
 * @param {object} metadata - Optional metadata
 *
 * @returns {object} Formatted success response
 *
 * @example
 * res.json(successResponse(product, { timestamp: new Date().toISOString() }));
 */
export function successResponse<T>(data: T, metadata?: any) {
  return {
    success: true,
    data,
    metadata: {
      timestamp: new Date().toISOString(),
      ...metadata,
    },
  };
}

/**
 * @summary
 * Standard error response format
 *
 * @function errorResponse
 * @module utils/response
 *
 * @param {string} message - Error message
 * @param {object} details - Optional error details
 *
 * @returns {object} Formatted error response
 *
 * @example
 * res.status(400).json(errorResponse('Invalid input', { field: 'email' }));
 */
export function errorResponse(message: string, details?: any) {
  return {
    success: false,
    error: {
      message,
      details,
      timestamp: new Date().toISOString(),
    },
  };
}

/**
 * @summary
 * Paginated list response format
 *
 * @function paginatedResponse
 * @module utils/response
 *
 * @param {T[]} data - Array of items
 * @param {number} page - Current page number
 * @param {number} pageSize - Items per page
 * @param {number} total - Total number of items
 *
 * @returns {object} Formatted paginated response
 *
 * @example
 * res.json(paginatedResponse(products, 1, 10, 100));
 */
export function paginatedResponse<T>(data: T[], page: number, pageSize: number, total: number) {
  return {
    success: true,
    data,
    metadata: {
      page,
      pageSize,
      total,
      totalPages: Math.ceil(total / pageSize),
      hasNext: page * pageSize < total,
      hasPrevious: page > 1,
      timestamp: new Date().toISOString(),
    },
  };
}
