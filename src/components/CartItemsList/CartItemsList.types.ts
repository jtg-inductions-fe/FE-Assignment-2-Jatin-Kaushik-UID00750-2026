import { CartItem } from '@types';

/** Props for the CartItemsList component. */
export interface CartItemsListProps {
    items: CartItem[];
    onQuantityChange: (menuItemId: string, newQuantity: number) => void;
}
