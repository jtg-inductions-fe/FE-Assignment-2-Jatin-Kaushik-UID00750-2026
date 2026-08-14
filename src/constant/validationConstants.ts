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
    INVALID_TIME: 'Must be HH:MM format',
    INVALID_CLOSE_TIME: 'Close time must be after open time',
    INVALID_DESCRIPTION: 'Description must be at least 10 characters',
    INVALID_CUISINES: 'Select at least one cuisine',
    INVALID_PINCODE: 'Must be a valid pin code',
    INVALID_IMAGE_URL: 'Must be a valid image URL',
} as const;
