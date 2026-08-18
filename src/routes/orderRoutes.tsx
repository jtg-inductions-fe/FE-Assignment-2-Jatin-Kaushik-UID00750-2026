import { RouteObject } from 'react-router-dom';

import { ROUTES, USER_ROLES } from '@constant';
import { CartPage } from '@pages';
import { OrdersPage } from '@pages';

import { RoleGuard } from './routeGuards/RoleGuard';

/**
 * Route configurations for shopping cart and order management.
 * Protects the cart route using role-based access control.
 */

export const orderRoutes: RouteObject[] = [
    {
        path: ROUTES.CART,
        element: <RoleGuard allowedRoles={[USER_ROLES.CUSTOMER]} />,
        children: [
            {
                index: true,
                element: <CartPage />,
            },
        ],
    },
    {
        path: ROUTES.ORDERS,
        element: <OrdersPage />,
    },
];
