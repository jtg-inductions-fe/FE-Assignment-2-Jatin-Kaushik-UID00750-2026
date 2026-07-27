import { RouteObject } from 'react-router-dom';

import { ROUTES } from '@constant';

import LoginPage from '../features/auth/LoginPage';
import SignupPage from '../features/auth/LoginPage';

export const authRoutes: RouteObject[] = [
    {
        path: ROUTES.LOGIN,
        element: <LoginPage />,
    },
    {
        path: ROUTES.SIGNUP,
        element: <SignupPage />,
    },
];
