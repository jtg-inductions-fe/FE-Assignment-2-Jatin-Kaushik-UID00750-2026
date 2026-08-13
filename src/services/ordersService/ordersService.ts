import { Order } from '@types';

import ordersData from '../../mocks/data/orders.json';
let allOrders = ordersData as Order[];

/**
 * Service handler for managing orders data operations.
 * Simulates an asynchronous backend database API layer using mock JSON data.
 */
export const ordersService = {
    /** Retrieves an order by its unique ID, returning null if not found */
    getOrderById: (orderId: string): Promise<Order | null> => {
        const orders = allOrders.find((order) => order.id === orderId);
        return Promise.resolve(orders ?? null);
    },

    /** Retrieves all orders of a single restaurant or multiple restaurants. */
    getOrdersByRestaurantId: (
        restaurantId: string | string[],
    ): Promise<Order[]> => {
        const orders = allOrders.filter((order) => {
            if (Array.isArray(restaurantId)) {
                return restaurantId.includes(order.restaurantId);
            }
            return order.restaurantId === restaurantId;
        });

        return Promise.resolve(orders);
    },

    /** Retrieves all orderd of a customer. */
    getMyOrders: (userId: string): Promise<Order[]> => {
        const orders = allOrders.filter((order) => order.customerId === userId);
        return Promise.resolve(orders);
    },

    /** Generates a unique ID and appends a new order to the list */
    createOrder: (payload: Omit<Order, 'id'>): Promise<Order> => {
        const newOrder = { ...payload, id: `ord_${Date.now()}` };
        allOrders.push(newOrder);
        return Promise.resolve(newOrder);
    },

    /** Searches for an existing order by ID and updates its fields */
    updateOrder: (payload: Order): Promise<Order> => {
        allOrders = allOrders.map((order) =>
            order.id === payload.id ? { ...order, ...payload } : order,
        );
        return Promise.resolve(payload);
    },
};
