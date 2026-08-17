import { AddToCartButton } from '@components/AddToCartButton';

import { MenuItemCustomerCardProps } from './MenuItemCard.types';
import { MenuItemCardBase } from './MenuItemCardBase.component';

/**
 * Customer-facing menu item card component.
 * Displays item details alongside a shopping cart button.
 */
export const MenuItemCustomerCard = ({
    item,
    quantity,
    isAvailable,
    disabled,
    onIncrement,
    onDecrement,
}: MenuItemCustomerCardProps) => (
    <MenuItemCardBase item={item} showAsDimmed={disabled || !isAvailable}>
        <AddToCartButton
            isAvailable={isAvailable}
            quantity={quantity}
            disabled={disabled}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
        />
    </MenuItemCardBase>
);
