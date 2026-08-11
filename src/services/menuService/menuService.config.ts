import { menuService } from './menuService';

/**
 * Menu Service Actions Configuration
 */
export const MENU_SERVICE_ACTIONS = {
    FETCH_BY_RESTAURANT: {
        type: 'menu/fetchByRestaurant',
        service: menuService.fetchMenuByRestaurant,
        fallbackMessage: 'Failed to fetch menu for the restaurant.',
    },
    FETCH_BY_ID: {
        type: 'menu/fetchById',
        service: menuService.fetchMenuItemById,
        fallbackMessage: 'Failed to fetch menu item',
    },
    ADD_ITEM: {
        type: 'menu/addItem',
        service: menuService.addMenuItem,
        fallbackMessage: 'Failed to add new menu item.',
    },
    EDIT_ITEM: {
        type: 'menu/editItem',
        service: menuService.editMenuItem,
        fallbackMessage: 'Failed to update menu item.',
    },
    DELETE_ITEM: {
        type: 'menu/deleteItem',
        service: menuService.deleteMenuItem,
        fallbackMessage: 'Failed to delete menu item.',
    },
};
