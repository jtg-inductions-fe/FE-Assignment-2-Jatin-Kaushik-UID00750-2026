import { authService } from './authService';

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
