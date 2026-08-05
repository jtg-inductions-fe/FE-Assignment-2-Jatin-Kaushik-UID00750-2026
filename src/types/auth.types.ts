import { AsyncStatus, UserRole } from './common.types';
import { User } from './user.types';

/**
 * Credentials required to authenticate an existing user.
 */
export interface LoginCredentials {
    email: string;
    password: string;
}

/**
 * Payload data required to register a new user account.
 */
export interface SignUpPayload {
    name: string;
    email: string;
    password: string;
    role: UserRole;
}

/**
 * Global state structure for managing authentication state.
 */
export interface AuthState {
    currentUser: User | null;
    isAuthenticated: boolean;
    status: AsyncStatus;
    error: string | null;
}
