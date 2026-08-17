import { createSelector } from '@reduxjs/toolkit';
import { CartState, CartTotals } from '@types';

// /** Selects raw cart state slice */
// export const selectCartState = (state: { cart: CartState }) => state.cart;

/** Selects current list of items in the cart */
export const selectCartItems = (state: { cart: CartState }) =>
    state.cart.cartItems;

/** Selects active restaurant context for the cart */
export const selectCartRestaurant = (state: { cart: CartState }) => ({
    restaurantId: state.cart.restaurantId,
    restaurantName: state.cart.restaurantName,
});

/** Selects a specific cart item by its menuItemId */
export const selectCartItemById = (
    state: { cart: CartState },
    menuItemId: string,
) => state.cart.cartItems.find((item) => item.menuItemId === menuItemId);

/**
 * Memoized selector to compute subtotal, booking fee, item count, and final total.
 */
export const selectCartTotals = createSelector(
    [selectCartItems],
    (cartItems): CartTotals => {
        const subtotal = cartItems.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0,
        );

        const itemCount = cartItems.reduce(
            (acc, item) => acc + item.quantity,
            0,
        );

        // Calculate booking fee: Max of ₹20 or 1% of subtotal
        let bookingFee = 0;
        if (subtotal > 0) {
            const percentageFee = subtotal * 0.01;
            bookingFee = Math.max(20, percentageFee);
        }

        const total = subtotal + bookingFee;

        return {
            subtotal,
            bookingFee,
            total,
            itemCount,
        };
    },
);
