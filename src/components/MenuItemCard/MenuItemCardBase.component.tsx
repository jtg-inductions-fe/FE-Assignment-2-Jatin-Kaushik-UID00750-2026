import { VegIndicator } from '@components/VegIndicator';

import * as S from './MenuItemCard.styles';
import { MenuItemCardBaseProps } from './MenuItemCard.types';

/**
 * Base layout card for displaying menu item details (name, price, image).
 * Supports contextual actions and an optional disabled/dimmed state.
 * @param props.item - Food item payload data (name, price, image).
 * @param props.showAsDimmed - Flag to visually indicate the item is unavailable or disabled.
 * @param props.actions - Optional action buttons (e.g., edit, delete) to display in the card.
 * @param props.children - Optional child components (e.g., add-to-cart button) to render in the card.
 */
export const MenuItemCardBase = ({
    item,
    showAsDimmed,
    actions,
    children,
}: MenuItemCardBaseProps) => (
    <S.StyledCard isAvailable={!showAsDimmed}>
        <S.InfoSection>
            <VegIndicator vegType={item.vegType} />
            <S.ItemName variant="h6">{item.name}</S.ItemName>
            <S.ItemPrice variant="body1">₹{item.price}</S.ItemPrice>
            <S.ItemDescription>{item.description}</S.ItemDescription>
            {/* Custom structural action slots like edit, or delete */}
            {actions && <S.ActionsWrapper>{actions}</S.ActionsWrapper>}
        </S.InfoSection>

        <S.ImageSection>
            <S.ItemImage
                src={item.imageUrl}
                alt={item.name}
                isAvailable={!showAsDimmed}
            />
            {/* Slot used for add-to-cart or counter controls */}
            <S.ChildrenWrapper>{children}</S.ChildrenWrapper>
        </S.ImageSection>
    </S.StyledCard>
);
