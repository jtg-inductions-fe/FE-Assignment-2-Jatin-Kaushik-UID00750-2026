import { CounterButton } from '@components/CounterButton';

import {
    ActionContainer,
    ContentContainer,
    ImageContainer,
    ItemImage,
    ItemName,
    ItemPrice,
    StyledCard,
} from './CartItemCard.styles';
import { CartItemCardProps } from './CartItemCard.types';

/**
 * Renders a card for a single cart item.
 * @param name - The name of the cart item.
 * @param price - The price of the cart item.
 * @param imageUrl - The URL of the cart item's image.
 * @param quantity - The quantity of the cart item.
 * @param onIncrement - Callback function to increment the quantity.
 * @param onDecrement - Callback function to decrement the quantity.
 */
export const CartItemCard = ({
    name,
    price,
    imageUrl,
    quantity,
    onIncrement,
    onDecrement,
}: CartItemCardProps) => {
    const formattedPrice = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
    }).format(price * quantity);

    return (
        <StyledCard>
            <ImageContainer>
                <ItemImage src={imageUrl} alt={name} />
            </ImageContainer>

            <ContentContainer>
                <ItemName>{name}</ItemName>
                <ItemPrice>{formattedPrice}</ItemPrice>
            </ContentContainer>

            <ActionContainer>
                <CounterButton
                    value={quantity}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                />
            </ActionContainer>
        </StyledCard>
    );
};
