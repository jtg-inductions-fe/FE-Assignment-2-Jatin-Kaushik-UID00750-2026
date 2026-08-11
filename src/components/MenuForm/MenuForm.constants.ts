import { VEG_TYPES } from '@constant';
import { MenuItemFormValues } from '@types';

export const defaultMenuFormValues: MenuItemFormValues = {
    name: '',
    description: '',
    categoryId: '',
    price: 0,
    stock: 0,
    imageUrl: '',
    vegType: VEG_TYPES.VEG,
};
