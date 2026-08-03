import { RouteObject } from 'react-router-dom';

import { ROUTES } from '@constant';
import { LoginPage } from '@pages';
import { SignupPage } from '@pages';

/**
 * Route configurations for authentication pages.
 */

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
