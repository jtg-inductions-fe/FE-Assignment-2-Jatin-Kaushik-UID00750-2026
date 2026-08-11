import { LoginFormData } from './LoginForm.types';

/**
 * Login form field names constants
 * @constant
 */
export const LOGIN_FIELD_NAMES = {
    EMAIL: 'email',
    PASSWORD: 'password',
} as const;

/** Default values for Login form */
export const defaultLoginFormValues: LoginFormData = {
    [LOGIN_FIELD_NAMES.EMAIL]: '',
    [LOGIN_FIELD_NAMES.PASSWORD]: '',
};
