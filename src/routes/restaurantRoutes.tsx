import { RouteObject } from 'react-router-dom';

import { ROUTES, USER_ROLES } from '@constant';
import { RestaurantDetailsPage } from '@pages';
import { DiscoveryPage } from '@pages';
import { EditRestaurantPage } from '@pages';
import { NewRestaurantPage } from '@pages';
import { EditMenuItemPage } from '@pages';

import { RoleGuard } from './routeGuards/RoleGuard';
import { NewMenuItemPage } from '../pages/NewMenuItemPage';

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
        element: <RoleGuard allowedRoles={[USER_ROLES.OWNER]} />,
        children: [
            {
                index: true,
                element: <NewRestaurantPage />,
            },
        ],
    },
    {
        path: ROUTES.RESTAURANT_EDIT,
        element: <RoleGuard allowedRoles={[USER_ROLES.OWNER]} />,
        children: [
            {
                index: true,
                element: <EditRestaurantPage />,
            },
        ],
    },
    {
        path: ROUTES.RESTAURANT_DETAILS,
        element: <RestaurantDetailsPage />,
    },
    {
        path: ROUTES.MENU_EDIT,
        element: <RoleGuard allowedRoles={[USER_ROLES.OWNER]} />,
        children: [
            {
                index: true,
                element: <EditMenuItemPage />,
            },
        ],
    },
    {
        path: ROUTES.MENU_NEW,
        element: <RoleGuard allowedRoles={[USER_ROLES.OWNER]} />,
        children: [
            {
                index: true,
                element: <NewMenuItemPage />,
            },
        ],
    },
];
