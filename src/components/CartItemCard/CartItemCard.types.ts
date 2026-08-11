/** Properties for the CartItemCard component. */
export interface CartItemCardProps {
    name: string;
    price: number;
    imageUrl: string;
    quantity: number;
    onIncrement: () => void;
    onDecrement: () => void;
}
