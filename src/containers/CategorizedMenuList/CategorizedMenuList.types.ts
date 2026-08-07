import { MenuCategory, MenuItem } from '@types';

/**
 * Properties for the CategorizedMenuList component.
 */
export interface CategorizedMenuListProps {
    categories: MenuCategory[];
    items: MenuItem[];
    renderItemCard: (item: MenuItem) => React.ReactNode;
}
