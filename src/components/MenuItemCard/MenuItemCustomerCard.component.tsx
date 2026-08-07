import { AddToCartButton } from '@components/AddToCartButton';

import { MenuItemCustomerCardProps } from './MenuItemCard.types';
import { MenuItemCardBase } from './MenuItemCardBase.component';

/**
 * Customer-facing menu item card component.
 * Displays item details alongside a shopping cart button.
 *
 * @param props.item - Food item payload data (name, price, image).
 * @param props.quantity - Number of units currently added to the cart.
 * @param props.isAvailable - Stock availability status flag.
 * @param props.onIncrement - Action to increase item count in the cart.
 * @param props.onDecrement - Action to decrease item count in the cart.
 */
export const MenuItemCustomerCard = ({
    item,
    quantity,
    isAvailable,
    onIncrement,
    onDecrement,
}: MenuItemCustomerCardProps) => (
    <MenuItemCardBase item={item} showAsDimmed={!isAvailable}>
        <AddToCartButton
            isAvailable={isAvailable}
            quantity={quantity}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
        />
    </MenuItemCardBase>
);
