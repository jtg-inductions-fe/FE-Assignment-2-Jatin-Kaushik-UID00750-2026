import { AUTH_SERVICE_ACTIONS } from '@services/authService';
import { asyncServiceThunk } from '@utils';

/** Asynchronous Thunk action that handles user login validation and initialization. */
export const loginThunk = asyncServiceThunk(AUTH_SERVICE_ACTIONS.LOGIN);

/** Asynchronous Thunk action that handles new user registration requests. */
export const signupThunk = asyncServiceThunk(AUTH_SERVICE_ACTIONS.SIGNUP);
