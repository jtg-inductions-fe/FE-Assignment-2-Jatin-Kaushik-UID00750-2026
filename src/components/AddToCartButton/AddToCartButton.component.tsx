import { CounterButton } from '@components/CounterButton';
import { UiButton } from '@components/UiButton';

import { OutOfStockBadge } from './AddToCartButton.styles';
import { AddToCartButtonProps } from './AddToCartButton.types';

/**
 * Add to cart button component for managing items in a shopping cart.
 * Automatically toggles between out-of-stock badges, call-to-actions, and counter controls.
 */
export const AddToCartButton = ({
    isAvailable,
    quantity,
    disabled,
    onIncrement,
    onDecrement,
}: AddToCartButtonProps) => {
    if (!isAvailable) {
        return (
            <OutOfStockBadge variant="caption">Out of Stock</OutOfStockBadge>
        );
    }

    if (quantity === 0) {
        return (
            <UiButton
                variant="contained"
                color="primary"
                onClick={onIncrement}
                size="small"
                disabled={disabled}
            >
                ADD
            </UiButton>
        );
    }

    return (
        <CounterButton
            value={quantity}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
        />
    );
};
