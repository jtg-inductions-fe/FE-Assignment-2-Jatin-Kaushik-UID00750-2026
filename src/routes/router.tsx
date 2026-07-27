import { createBrowserRouter } from 'react-router-dom';

import { ROUTES } from '@constant';

import { authRoutes } from './authRoutes';
import ErrorPage from './ErrorPage';
import NotFoundPage from './NotFoundPage';
import { orderRoutes } from './orderRoutes';
import ProtectedRoute from './ProtectedRoute';
import PublicOnlyRoute from './PublicOnlyRoute';
import { restaurantRoutes } from './restaurantRoutes';
import AuthLayout from '../layouts/AuthLayout';
import MainLayout from '../layouts/MainLayout';

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
