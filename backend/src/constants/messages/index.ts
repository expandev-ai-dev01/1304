/**
 * @summary
 * Application message constants
 *
 * @module constants/messages
 */

export const MESSAGES = {
  // Success messages
  SUCCESS: {
    CREATED: 'Resource created successfully',
    UPDATED: 'Resource updated successfully',
    DELETED: 'Resource deleted successfully',
    RETRIEVED: 'Resource retrieved successfully',
  },

  // Error messages
  ERROR: {
    NOT_FOUND: 'Resource not found',
    VALIDATION_FAILED: 'Validation failed',
    UNAUTHORIZED: 'Unauthorized access',
    FORBIDDEN: 'Access forbidden',
    INTERNAL_ERROR: 'Internal server error',
    DUPLICATE: 'Resource already exists',
  },

  // Validation messages
  VALIDATION: {
    REQUIRED: 'This field is required',
    INVALID_FORMAT: 'Invalid format',
    MIN_LENGTH: 'Minimum length not met',
    MAX_LENGTH: 'Maximum length exceeded',
    INVALID_EMAIL: 'Invalid email format',
    INVALID_PHONE: 'Invalid phone format',
    INVALID_URL: 'Invalid URL format',
  },
} as const;
