export const ROUTES = {
    LOGIN: '/login',
    SIGNUP: '/signup',
    DISCOVERY: '/',
    RESTAURANT_NEW: '/restaurants/new',
    RESTAURANT_DETAILS: '/restaurants/:restaurantId',
    RESTAURANT_EDIT: '/restaurants/:restaurantId/edit',
    CART: '/cart',
    ORDERS: '/orders',
    NOT_FOUND: '*',
} as const;
