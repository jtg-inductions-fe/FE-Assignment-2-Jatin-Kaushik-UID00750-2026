import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddToCartPayload, CartState, UpdateQuantityPayload } from '@types';

const initialState: CartState = {
    restaurantId: null,
    restaurantName: null,
    cartItems: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        /**
         * Adds an item to the cart.
         * If the item is from a different restaurant, it resets the cart to start fresh with the new restaurant.
         */
        addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
            const { item, restaurantId, restaurantName } = action.payload;
            const quantityToAdd =
                item.quantity && item.quantity > 0 ? item.quantity : 1;

            // If switching restaurants, clear existing cart items
            if (state.restaurantId && state.restaurantId !== restaurantId) {
                state.cartItems = [];
            }

            state.restaurantId = restaurantId;
            state.restaurantName = restaurantName;

            const existingItemIndex = state.cartItems.findIndex(
                (i) => i.menuItemId === item.menuItemId,
            );

            if (existingItemIndex > -1) {
                state.cartItems[existingItemIndex].quantity += quantityToAdd;
            } else {
                state.cartItems.push({
                    menuItemId: item.menuItemId,
                    name: item.name,
                    price: item.price,
                    imageUrl: item.imageUrl,
                    quantity: quantityToAdd,
                });
            }
        },

        /** Removes a specific item by its menuItemId. */
        removeFromCart: (
            state,
            action: PayloadAction<{ menuItemId: string }>,
        ) => {
            state.cartItems = state.cartItems.filter(
                (item) => item.menuItemId !== action.payload.menuItemId,
            );

            if (state.cartItems.length === 0) {
                state.restaurantId = null;
                state.restaurantName = null;
            }
        },

        /** Adjusts the quantity of a specific item. Removes item if quantity reaches 0 or less. */
        updateQuantity: (
            state,
            action: PayloadAction<UpdateQuantityPayload>,
        ) => {
            const { menuItemId, quantity } = action.payload;
            const existingItemIndex = state.cartItems.findIndex(
                (i) => i.menuItemId === menuItemId,
            );

            if (existingItemIndex > -1) {
                if (quantity <= 0) {
                    state.cartItems.splice(existingItemIndex, 1);
                } else {
                    state.cartItems[existingItemIndex].quantity = quantity;
                }
            }

            if (state.cartItems.length === 0) {
                state.restaurantId = null;
                state.restaurantName = null;
            }
        },

        /** Clears all cart contents and resets restaurant context. */
        clearCart: () => initialState,
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
    cartSlice.actions;

export default cartSlice.reducer;
