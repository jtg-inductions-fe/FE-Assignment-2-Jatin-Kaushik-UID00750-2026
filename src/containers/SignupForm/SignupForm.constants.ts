import { USER_ROLES } from '@constant';

/**
 * Signup form field names constants
 * @constant
 */
export const SIGNUP_FIELD_NAMES = {
    NAME: 'name',
    EMAIL: 'email',
    PASSWORD: 'password',
    ROLE: 'role',
} as const;

/** Default Login form values */
export const defaultSignupFormValues = {
    [SIGNUP_FIELD_NAMES.NAME]: '',
    [SIGNUP_FIELD_NAMES.EMAIL]: '',
    [SIGNUP_FIELD_NAMES.PASSWORD]: '',
    [SIGNUP_FIELD_NAMES.ROLE]: USER_ROLES.CUSTOMER,
};
