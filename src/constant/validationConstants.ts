/**
 * Validation Messages for Form fields
 * @constant
 */

export const VALIDATION_MESSAGES = {
    REQUIRED_FIELD: 'This field is required',
    INVALID_EMAIL: 'Enter a valid email address',
    INVALID_PASSWORD: 'Password must be at least 8 characters long',
    INVALID_ROLE: 'Please select a valid user role',
    INVALID_NAME: 'Name must contain at least 3 characters',
} as const;
