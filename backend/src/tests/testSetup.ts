/**
 * @summary
 * Global test setup and configuration
 *
 * @module tests/testSetup
 */

// Global test setup
beforeAll(() => {
  // Setup code that runs before all tests
  console.log('Starting test suite...');
});

afterAll(() => {
  // Cleanup code that runs after all tests
  console.log('Test suite completed.');
});

// Global test utilities
export const testUtils = {
  /**
   * Generate a random ID for testing
   */
  generateId: (): number => Math.floor(Math.random() * 1000000),

  /**
   * Generate a random string for testing
   */
  generateString: (length: number = 10): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  },

  /**
   * Wait for a specified time (for async testing)
   */
  wait: (ms: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  },
};
