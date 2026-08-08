import { MENU_SERVICE_ACTIONS } from '@services/menuService';
import { asyncServiceThunk } from '@utils';

/** Asynchronous Thunk action that fetches all menu items for a specific restaurant. */
export const fetchMenuByRestaurant = asyncServiceThunk(
    MENU_SERVICE_ACTIONS.FETCH_BY_RESTAURANT,
);

/** Asynchronous Thunk action that adds a new menu item for a specific restaurant. */
export const addMenuItem = asyncServiceThunk(MENU_SERVICE_ACTIONS.ADD_ITEM);

/** Asynchronous Thunk action that updates an existing menu item for a specific restaurant. */
export const editMenuItem = asyncServiceThunk(MENU_SERVICE_ACTIONS.EDIT_ITEM);

/** Asynchronous Thunk action that deletes an existing menu item for a specific restaurant. */
export const deleteMenuItem = asyncServiceThunk(
    MENU_SERVICE_ACTIONS.DELETE_ITEM,
);
