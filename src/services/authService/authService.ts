import { LoginCredentials, SignUpPayload, User, UsersSeed } from '@types';

import usersData from '../../mocks/data/users.json';

const userSeed = usersData as UsersSeed;

const users = [...userSeed.owners, ...userSeed.customers];

export const authService = {
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
