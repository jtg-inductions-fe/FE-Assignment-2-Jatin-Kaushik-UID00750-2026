import { UserRole } from './common.types';
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

export type AsyncStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

/** Shape of authSlice's state — the profile saved to storage on login */
export interface AuthState {
    currentUser: User | null;
    isAuthenticated: boolean;
    status: AsyncStatus;
    error: string | null;
}
