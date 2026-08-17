import { CounterButton } from '@components/CounterButton';
import { formatIndianCurrency } from '@utils';

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
 */
export const CartItemCard = ({
    name,
    price,
    imageUrl,
    quantity,
    onIncrement,
    onDecrement,
}: CartItemCardProps) => (
    <StyledCard>
        <ImageContainer>
            <ItemImage src={imageUrl} alt={name} />
        </ImageContainer>

        <ContentContainer>
            <ItemName>{name}</ItemName>
            <ItemPrice>{formatIndianCurrency(price * quantity)}</ItemPrice>
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
