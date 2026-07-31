import { AsyncStatus, UserRole } from './common.types';
import { User } from './user.types';

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface SignUpPayload {
    name: string;
    email: string;
    password: string;
    role: UserRole;
}

export interface AuthState {
    currentUser: User | null;
    isAuthenticated: boolean;
    status: AsyncStatus;
    error: string | null;
}
