import { ORDERS_SERVICE_ACTIONS } from '@services/ordersService';
import { asyncServiceThunk } from '@utils';

/** Asynchronous Thunk action that fetches an order by its unique ID. */
export const fetchOrderById = asyncServiceThunk(
    ORDERS_SERVICE_ACTIONS.GET_BY_ID,
);

/** Asynchronous Thunk action that fetches orders of a restaurant. */
export const fetchOrdersByRestaurantId = asyncServiceThunk(
    ORDERS_SERVICE_ACTIONS.GET_BY_RESTAURANT_ID,
);

/** Asynchronous Thunk action that fetches restaurants owned by the current user. */
export const fetchMyOrders = asyncServiceThunk(ORDERS_SERVICE_ACTIONS.GET_MY);

/** Asynchronous Thunk action that creates a new order. */
export const createOrder = asyncServiceThunk(ORDERS_SERVICE_ACTIONS.CREATE);

/** Asynchronous Thunk action that updates an existing order. */
export const updateOrder = asyncServiceThunk(ORDERS_SERVICE_ACTIONS.UPDATE);
