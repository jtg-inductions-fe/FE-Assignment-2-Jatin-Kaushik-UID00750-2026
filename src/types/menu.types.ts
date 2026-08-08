import { AsyncStatus, VegType } from './common.types';

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

/** Payload shape for the Add/Edit Menu Item modal. */
export type MenuItemFormValues = Omit<MenuItem, 'id' | 'restaurantId'>;

/** Mock Data structure for menu items with categories */
export interface MenuSeed {
    categories: MenuCategory[];
    items: MenuItem[];
}

/** Global state structure for managing menu data, including categories and items. */
export interface MenuState {
    categories: MenuCategory[];
    items: MenuItem[];
    status: AsyncStatus;
    error: string | null;
}
