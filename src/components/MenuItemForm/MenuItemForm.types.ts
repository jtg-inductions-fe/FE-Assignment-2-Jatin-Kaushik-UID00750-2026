import * as yup from 'yup';

import { menuFormSchema } from './MenuItemForm.schema';

/** Represents category of a menu item in the restaurant */
export interface MenuCategory {
    id: string;
    restaurantId: string;
    name: string;
    displayOrder: number;
}

/** Form values type for the menu item form */
export type MenuItemFormValues = yup.InferType<typeof menuFormSchema>;

/** Props for the MenuItemForm component */
export interface MenuItemFormProps {
    menuItemId?: string;
    initialValues?: MenuItemFormValues;
    categories: MenuCategory[];
    onSubmit: (values: MenuItemFormValues) => Promise<void>;
}
