/** Props for managing cart item controls and availability states. */
export interface AddToCartButtonProps {
    isAvailable: boolean;
    quantity: number;
    onIncrement: () => void;
    onDecrement: () => void;
}
