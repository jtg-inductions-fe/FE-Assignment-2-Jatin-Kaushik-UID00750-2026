import { RouteObject } from 'react-router-dom';

import { ROUTES } from '@constant';
import { RestaurantDetailsPage } from '@pages';
import { DiscoveryPage } from '@pages';
import { EditRestaurantPage } from '@pages';
import { NewRestaurantPage } from '@pages';

import { RoleGuard } from './RoleGuard';

/**
 * Route configurations for restaurant discovery and management.
 * Protects restaurant creation and editing views with owner role-based restrictions.
 */

export const restaurantRoutes: RouteObject[] = [
    {
        index: true,
        element: <DiscoveryPage />,
    },
    {
        path: ROUTES.RESTAURANT_NEW,
        element: <RoleGuard allowedRoles={['owner']} />,
        children: [
            {
                index: true,
                element: <NewRestaurantPage />,
            },
        ],
    },
    {
        path: ROUTES.RESTAURANT_DETAILS,
        element: <RestaurantDetailsPage />,
    },
    {
        path: ROUTES.RESTAURANT_EDIT,
        element: <RoleGuard allowedRoles={['owner']} />,
        children: [
            {
                index: true,
                element: <EditRestaurantPage />,
            },
        ],
    },
];
