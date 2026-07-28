import { createBrowserRouter } from 'react-router-dom';

import { ROUTES } from '@constant';
import { AuthLayout } from '@layouts';
import { MainLayout } from '@layouts';
import { ErrorPage } from '@pages';
import { NotFoundPage } from '@pages';

import { authRoutes } from './authRoutes';
import { orderRoutes } from './orderRoutes';
import { ProtectedRoute } from './ProtectedRoute';
import { PublicOnlyRoute } from './PublicOnlyRoute';
import { restaurantRoutes } from './restaurantRoutes';

export const router = createBrowserRouter([
    // GLOBAL PROTECTED BOUNDARY
    {
        element: <ProtectedRoute />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <MainLayout />,
                children: [...restaurantRoutes, ...orderRoutes],
            },
        ],
    },
    // PUBLIC-ONLY ROUTES (Login / Signup)
    {
        element: <PublicOnlyRoute />,
        children: [
            {
                element: <AuthLayout />,
                children: [...authRoutes],
            },
        ],
    },
    // FALLBACK CATCH-ALL
    {
        path: ROUTES.NOT_FOUND,
        element: <NotFoundPage />,
    },
]);
