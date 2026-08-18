import { MenuCategory, MenuItem } from '@types';

/**
 * Properties for the CategorizedMenuList component.
 */
export interface CategorizedMenuListProps {
    categorizedData: Array<MenuCategory & { menuItems: MenuItem[] }>;
    renderItemCard: (item: MenuItem) => React.ReactNode;
}
