import { CartItemCard } from '@components/CartItemCard';

import { ItemsContainer } from './CartItemsList.styles';
import { CartItemsListProps } from './CartItemsList.types';

/**
 * Renders a list of cart items.
 */
export const CartItemsList = ({
    items,
    onQuantityChange,
}: CartItemsListProps) => (
    <ItemsContainer>
        {items.map((item) => (
            <CartItemCard
                key={item.menuItemId}
                name={item.name}
                price={item.price}
                imageUrl={item.imageUrl}
                quantity={item.quantity}
                onIncrement={() =>
                    onQuantityChange(item.menuItemId, item.quantity + 1)
                }
                onDecrement={() =>
                    onQuantityChange(item.menuItemId, item.quantity - 1)
                }
            />
        ))}
    </ItemsContainer>
);
