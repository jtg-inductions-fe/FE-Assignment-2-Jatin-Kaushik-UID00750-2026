import { ordersService } from './ordersService';

/**
 * Configuration mapping for order-related async service actions.
 * Groups action types, API service calls, and user-facing fallback error messages.
 */
export const ORDERS_SERVICE_ACTIONS = {
    GET_BY_ID: {
        type: 'orders/id',
        service: ordersService.getOrderById,
        fallbackMessage: 'Failed to fetch the order.',
    },
    GET_BY_RESTAURANT_ID: {
        type: 'orders/restaurantId',
        service: ordersService.getOrdersByRestaurantId,
        fallbackMessage: 'Failed to fetch the orders.',
    },
    GET_MY: {
        type: 'orders/getMy',
        service: ordersService.getMyOrders,
        fallbackMessage: 'Failed to fetch orders.',
    },
    CREATE: {
        type: 'orders/add',
        service: ordersService.createOrder,
        fallbackMessage: 'Failed to create new order',
    },
    UPDATE: {
        type: 'orders/edit',
        service: ordersService.updateOrder,
        fallbackMessage: 'Failed to update order information',
    },
};
