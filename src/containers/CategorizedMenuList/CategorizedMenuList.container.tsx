import { useMemo } from 'react';

import { MenuItem } from '@types';

import * as S from './CategorizedMenuList.styles';
import { CategorizedMenuListProps } from './CategorizedMenuList.types';

/**
 * Groups menu items by their respective categories and renders them in sorted sections.
 * Also hides categories that do not contain any menu items.
 *
 * @param {CategorizedMenuListProps} props - Component properties.
 * @param {Array} props.categories - Array of available menu categories with display ordering.
 * @param {Array} props.items - Complete collection of menu items to be sorted.
 * @param {function} props.renderItemCard - Render prop function used to instantiate custom item cards.
 */
export const CategorizedMenuList = ({
    categories,
    items,
    renderItemCard,
}: CategorizedMenuListProps) => {
    const categorizedData = useMemo(() => {
        const sortedCategories = [...categories].sort(
            (a, b) => a.displayOrder - b.displayOrder,
        );

        const itemsByCategory = items.reduce<Record<string, MenuItem[]>>(
            (acc, item) => {
                if (!acc[item.categoryId]) {
                    acc[item.categoryId] = [];
                }
                acc[item.categoryId].push(item);
                return acc;
            },
            {},
        );

        return sortedCategories.map((category) => ({
            ...category,
            menuItems: itemsByCategory[category.id] || [],
        }));
    }, [categories, items]);

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
