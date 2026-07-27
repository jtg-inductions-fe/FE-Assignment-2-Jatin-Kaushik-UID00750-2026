import { RouteObject } from 'react-router-dom';

import { ROUTES } from '@constant';

import RoleGuard from './RoleGuard';
import CartPage from '../features/cart/CartPage';
import OrdersPage from '../features/orders/OrdersPage';

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
