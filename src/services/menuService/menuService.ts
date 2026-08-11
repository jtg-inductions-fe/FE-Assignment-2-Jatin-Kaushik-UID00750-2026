import { MenuItem, MenuItemFormValues, MenuSeed } from '@types';

import mockMenuData from '../../mocks/data/menu.json';

const menuData = mockMenuData as MenuSeed;

export const menuService = {
    /** Retrieves menu data for a specific restaurant */
    fetchMenuByRestaurant: (restaurantId: string): Promise<MenuSeed> =>
        Promise.resolve({
            categories: menuData.categories.filter(
                (c) => c.restaurantId === restaurantId,
            ),
            items: menuData.items.filter(
                (i) => i.restaurantId === restaurantId,
            ),
        }),

    /** Retrieves specific menu item by its unique ID, returning null if not found */
    fetchMenuItemById: (menuItemId: string): Promise<MenuItem | null> => {
        const menu = menuData.items.find((item) => item.id === menuItemId);
        return Promise.resolve(menu ?? null);
    },

    /** Adds a new menu item */
    addMenuItem: (payload: {
        restaurantId: string;
        item: MenuItemFormValues;
    }): Promise<MenuItem> => {
        const newItem: MenuItem = {
            id: `item-${Date.now()}`,
            restaurantId: payload.restaurantId,
            ...payload.item,
        };
        menuData.items.push(newItem);
        return Promise.resolve(newItem);
    },

    /** Updates an existing menu item */
    editMenuItem: (payload: {
        id: string;
        item: MenuItemFormValues;
    }): Promise<MenuItem> => {
        const index = menuData.items.findIndex((i) => i.id === payload.id);
        if (index === -1) throw new Error('Menu item not found');

        const updatedItem = { ...menuData.items[index], ...payload.item };
        menuData.items[index] = updatedItem;
        return Promise.resolve(updatedItem);
    },

    /** Deletes a menu item by its ID */
    deleteMenuItem: (id: string): Promise<string> => {
        const index = menuData.items.findIndex((i) => i.id === id);
        if (index === -1)
            throw new Error('Menu item not found or already deleted');

        menuData.items.splice(index, 1);
        return Promise.resolve(id);
    },
};
