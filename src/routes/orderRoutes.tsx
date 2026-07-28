import { RouteObject } from 'react-router-dom';

import { ROUTES } from '@constant';
import { CartPage } from '@pages';
import { OrdersPage } from '@pages';

import { RoleGuard } from './RoleGuard';

export const orderRoutes: RouteObject[] = [
    {
        path: ROUTES.CART,
        element: <RoleGuard allowedRoles={['customer']} />,
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
