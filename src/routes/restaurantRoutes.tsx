import { RouteObject } from 'react-router-dom';

import { ROUTES } from '@constant';

import RoleGuard from './RoleGuard';
import RestaurantDetailsPage from '../features/menu/RestaurantDetailsPage';
import DiscoveryPage from '../features/restaurants/DiscoveryPage';
import EditRestaurantPage from '../features/restaurants/EditRestaurantPage';
import NewRestaurantPage from '../features/restaurants/NewRestaurantPage';

export const restaurantRoutes: RouteObject[] = [
    {
        index: true,
        path: ROUTES.DISCOVERY,
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
