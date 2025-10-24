import { z } from 'zod';

/**
 * @summary
 * Common Zod validation schemas for reuse across the application
 *
 * @module utils/validation
 */

// String validations
export const zString = z.string().min(1, 'Field is required');
export const zNullableString = z.string().nullable();
export const zName = z.string().min(1).max(200);
export const zDescription = z.string().min(1).max(500);
export const zNullableDescription = z.string().max(500).nullable();
export const zEmail = z.string().email('Invalid email format');
export const zPhone = z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone format');
export const zUrl = z.string().url('Invalid URL format');

// Number validations
export const zNumber = z.number();
export const zPositiveNumber = z.number().positive('Must be a positive number');
export const zNonNegativeNumber = z.number().nonnegative('Must be non-negative');
export const zInteger = z.number().int('Must be an integer');
export const zPositiveInteger = z.number().int().positive();
export const zId = z.number().int().positive();
export const zNullableId = z.number().int().positive().nullable();

// Boolean validations
export const zBoolean = z.boolean();
export const zBit = z.union([z.literal(0), z.literal(1)]);

// Date validations
export const zDate = z.date();
export const zDateString = z.string().datetime();
export const zNullableDate = z.date().nullable();

// Array validations
export const zArray = <T extends z.ZodTypeAny>(schema: T) => z.array(schema);
export const zNonEmptyArray = <T extends z.ZodTypeAny>(schema: T) =>
  z.array(schema).min(1, 'Array must not be empty');

// Object validations
export const zRecord = z.record(z.any());

/**
 * @summary
 * Create a nullable string with max length validation
 *
 * @function zNullableStringWithMax
 *
 * @param {number} maxLength - Maximum string length
 *
 * @returns {ZodSchema} Zod schema for nullable string with max length
 */
export const zNullableStringWithMax = (maxLength: number) => z.string().max(maxLength).nullable();

/**
 * @summary
 * Create a string with min and max length validation
 *
 * @function zStringWithLength
 *
 * @param {number} minLength - Minimum string length
 * @param {number} maxLength - Maximum string length
 *
 * @returns {ZodSchema} Zod schema for string with length constraints
 */
export const zStringWithLength = (minLength: number, maxLength: number) =>
  z.string().min(minLength).max(maxLength);
