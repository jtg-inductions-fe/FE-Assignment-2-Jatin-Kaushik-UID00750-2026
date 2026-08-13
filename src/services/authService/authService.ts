import { LoginCredentials, SignUpPayload, User, UsersSeed } from '@types';

import usersData from '../../mocks/data/users.json';

const userSeed = usersData as UsersSeed;

const users = [...userSeed.owners, ...userSeed.customers];

/** Service managing user authentication operations against local mock JSON data. */

export const authService = {
    /**
     * Validates user credentials and resolves the matching profile data.
     */

    login: (payload: LoginCredentials): Promise<User> => {
        const requestedUser = userSeed.credentials.find(
            (user) => user.email === payload.email,
        );
        if (!requestedUser || requestedUser.password !== payload.password) {
            throw new Error('Invalid credentials');
        }
        const user = users.find((u) => u.email === requestedUser.email);
        return Promise.resolve(user as User);
    },

    /**
     * Evaluates availability and processes new account registration requests.
     */

    signup: (payload: SignUpPayload): Promise<boolean> => {
        const isEmailExist = userSeed.credentials.find(
            (user) => user.email === payload.email,
        );
        if (isEmailExist) {
            throw new Error('Email already exists');
        }
        return Promise.resolve(true);
    },
};
