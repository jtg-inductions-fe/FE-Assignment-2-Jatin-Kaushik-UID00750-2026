import { VegType } from './common.types';

/** Represents category of a menu item in the restaurant */
export interface MenuCategory {
    id: string;
    restaurantId: string;
    name: string;
    /** Handles the order categories render in on the menu page */
    displayOrder: number;
}

/** Represents the menu item available in the restaurant with key details */
export interface MenuItem {
    id: string;
    restaurantId: string;
    categoryId: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    vegType: VegType;
    stock: number;
}

/** Function to compute stock availability */
export const isMenuItemAvailable = (item: Pick<MenuItem, 'stock'>): boolean =>
    item.stock > 0;

/** Payload shape for the Add/Edit Menu Item modal. */
export type MenuItemFormValues = Omit<MenuItem, 'id' | 'restaurantId'>;
