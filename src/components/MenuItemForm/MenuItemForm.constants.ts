import { VEG_TYPES } from '@constant';
import { MenuItemFormValues } from '@types';

/**
 * Menu form field names constants
 * @constant
 */
export const MENU_ITEM_FORM_FIELD_NAMES = {
    NAME: 'name',
    DESCRIPTION: 'description',
    CATEGORY_ID: 'categoryId',
    PRICE: 'price',
    STOCK: 'stock',
    IMAGE_URL: 'imageUrl',
    VEG_TYPE: 'vegType',
} as const;

export const defaultMenuItemFormValues: MenuItemFormValues = {
    [MENU_ITEM_FORM_FIELD_NAMES.NAME]: '',
    [MENU_ITEM_FORM_FIELD_NAMES.DESCRIPTION]: '',
    [MENU_ITEM_FORM_FIELD_NAMES.CATEGORY_ID]: '',
    [MENU_ITEM_FORM_FIELD_NAMES.PRICE]: 0,
    [MENU_ITEM_FORM_FIELD_NAMES.STOCK]: 0,
    [MENU_ITEM_FORM_FIELD_NAMES.IMAGE_URL]: '',
    [MENU_ITEM_FORM_FIELD_NAMES.VEG_TYPE]: VEG_TYPES.VEG,
};
