import { RestaurantMenu } from '@mui/icons-material';

import { EmptyListIndicator } from '@components/EmptyListIndicator';

import {
    CardItemFrame,
    CardsWrapper,
    CategorySection,
    CategoryTitle,
    ItemCountText,
    ListContainer,
    SectionDivider,
} from './CategorizedMenuList.styles';
import { CategorizedMenuListProps } from './CategorizedMenuList.types';

/**
 * Groups menu items by their respective categories and renders them in sorted sections.
 * Also hides categories that do not contain any menu items.
 */
export const CategorizedMenuList = ({
    categorizedData,
    renderItemCard,
}: CategorizedMenuListProps) => {
    const isListEmpty = categorizedData.find(
        (data) => data.menuItems.length !== 0,
    );

    if (!isListEmpty) {
        return (
            <EmptyListIndicator
                title="No Menu Items Found"
                description="This restaurant has no menu items available."
                icon={<RestaurantMenu />}
            />
        );
    }
    return (
        <ListContainer spacing={5}>
            {categorizedData.map((category) => {
                if (category.menuItems.length === 0) return null;
                const count = category.menuItems.length;

                return (
                    <CategorySection key={category.id} component="section">
                        <CategoryTitle variant="h6" component="h2">
                            {category.name}
                        </CategoryTitle>
                        <ItemCountText variant="body2">
                            {count} {count === 1 ? 'item' : 'items'}
                        </ItemCountText>
                        <SectionDivider />
                        <CardsWrapper>
                            {category.menuItems.map((item) => (
                                <CardItemFrame key={item.id}>
                                    {renderItemCard(item)}
                                </CardItemFrame>
                            ))}
                        </CardsWrapper>
                    </CategorySection>
                );
            })}
        </ListContainer>
    );
};
