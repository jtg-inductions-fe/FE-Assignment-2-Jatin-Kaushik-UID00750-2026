import { authService } from './authService';

/**
 * Configuration mapping for authentication-related async service actions.
 * Groups action types, API service calls, and user-facing fallback error messages.
 */
export const AUTH_SERVICE_ACTIONS = {
    LOGIN: {
        type: 'auth/login',
        service: authService.login,
        fallbackMessage: 'Login failed',
    },
    SIGNUP: {
        type: 'auth/signup',
        service: authService.signup,
        fallbackMessage: 'Signup failed',
    },
};
