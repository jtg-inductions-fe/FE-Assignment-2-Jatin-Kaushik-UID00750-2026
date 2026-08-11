/** Props for managing cart item controls and availability states. */
export interface AddToCartButtonProps {
    isAvailable: boolean;
    quantity: number;
    disabled?: boolean;
    onIncrement: () => void;
    onDecrement: () => void;
    onAddToCart: () => void;
}
