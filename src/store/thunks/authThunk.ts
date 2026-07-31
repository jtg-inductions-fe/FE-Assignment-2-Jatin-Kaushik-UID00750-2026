import { AUTH_SERVICE_ACTIONS } from '@services/authService';
import { asyncServiceThunk } from '@utlis';

export const loginThunk = asyncServiceThunk(AUTH_SERVICE_ACTIONS.LOGIN);

export const signupThunk = asyncServiceThunk(AUTH_SERVICE_ACTIONS.SIGNUP);
