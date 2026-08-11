/** Represents a single item in the shopping cart. */
export interface CartItem {
    menuItemId: string;
    name: string;
    price: number;
    imageUrl: string;
    quantity: number;
}

/** Manage single restaurant cart only */
export interface CartState {
    restaurantId: string | null;
    restaurantName: string | null;
    cartItems: CartItem[];
}

/** Represents the totals for the shopping cart. */
export interface CartTotals {
    subtotal: number;
    bookingFee: number;
    total: number;
    itemCount: number;
}

/** Payload for adding an item to the cart. */
export interface AddToCartPayload {
    item: Omit<CartItem, 'quantity'> & { quantity?: number };
    restaurantId: string;
    restaurantName: string;
}

/** Payload for updating the quantity of an item in the cart. */
export interface UpdateQuantityPayload {
    menuItemId: string;
    quantity: number;
}
