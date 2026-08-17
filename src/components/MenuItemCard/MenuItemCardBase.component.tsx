import { VegIndicator } from '@components/VegTypeIndicator';

import {
    ActionsWrapper,
    ChildrenWrapper,
    ImageSection,
    InfoSection,
    ItemDescription,
    ItemImage,
    ItemName,
    ItemPrice,
    StyledCard,
} from './MenuItemCard.styles';
import { MenuItemCardBaseProps } from './MenuItemCard.types';

/**
 * Base layout card for displaying menu item details (name, price, image).
 * Supports contextual actions and an optional disabled/dimmed state.
 */
export const MenuItemCardBase = ({
    item,
    showAsDimmed,
    actions,
    children,
}: MenuItemCardBaseProps) => (
    <StyledCard isAvailable={!showAsDimmed}>
        <InfoSection>
            <VegIndicator
                vegType={item.vegType}
                aria-label={item.vegType.replace(/-/g, ' ')}
            />
            <ItemName variant="h6">{item.name}</ItemName>
            <ItemPrice variant="body1">₹{item.price}</ItemPrice>
            <ItemDescription>{item.description}</ItemDescription>
            {/* Custom structural action slots like edit, or delete */}
            {actions && <ActionsWrapper>{actions}</ActionsWrapper>}
        </InfoSection>

        <ImageSection>
            <ItemImage
                src={item.imageUrl}
                alt={item.name}
                isAvailable={!showAsDimmed}
            />
            {/* Slot used for add-to-cart or counter controls */}
            <ChildrenWrapper>{children}</ChildrenWrapper>
        </ImageSection>
    </StyledCard>
);
