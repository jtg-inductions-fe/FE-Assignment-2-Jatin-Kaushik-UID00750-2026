import { RestaurantMenu } from '@mui/icons-material';

import { EmptyListIndicator } from '@components/EmptyListIndicator';
import { useAppSelector } from '@hooks';

import * as S from './CategorizedMenuList.styles';
import { CategorizedMenuListProps } from './CategorizedMenuList.types';

/**
 * Groups menu items by their respective categories and renders them in sorted sections.
 * Also hides categories that do not contain any menu items.
 *
 * @param {CategorizedMenuListProps} props - Component properties.
 * @param {Array} props.categorizedData - Array of menu categories with their associated items.
 * @param {function} props.renderItemCard - Render prop function used to instantiate custom item cards.
 */
export const CategorizedMenuList = ({
    categorizedData,
    renderItemCard,
}: CategorizedMenuListProps) => {
    const { items } = useAppSelector((state) => state.menu);

    if (items.length === 0) {
        return (
            <EmptyListIndicator
                title="No Menu Items Found"
                description="You haven't listed any menu items yet. Create your first menu item to begin receiving orders."
                icon={<RestaurantMenu />}
            />
        );
    }
    return (
        <S.ListContainer spacing={5}>
            {categorizedData.map((category) => {
                if (category.menuItems.length === 0) return null;
                const count = category.menuItems.length;

                return (
                    <S.CategorySection key={category.id} component="section">
                        <S.CategoryTitle variant="h6" component="h2">
                            {category.name}
                        </S.CategoryTitle>
                        <S.ItemCountText variant="body2">
                            {count} {count === 1 ? 'item' : 'items'}
                        </S.ItemCountText>
                        <S.SectionDivider />
                        <S.CardsWrapper>
                            {category.menuItems.map((item) => (
                                <S.CardItemFrame key={item.id}>
                                    {renderItemCard(item)}
                                </S.CardItemFrame>
                            ))}
                        </S.CardsWrapper>
                    </S.CategorySection>
                );
            })}
        </S.ListContainer>
    );
};
