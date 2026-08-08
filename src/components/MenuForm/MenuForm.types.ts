import * as yup from 'yup';

import { menuFormSchema } from './MenuForm.schema';

// VegType definition matches your design
export type VegType = 'veg' | 'non-veg';

/** Represents category of a menu item in the restaurant */
export interface MenuCategory {
    id: string;
    restaurantId: string;
    name: string;
    displayOrder: number;
}

// Inferred TypeScript Form Type ensures runtime validations match compile-time types perfectly
export type MenuItemFormValues = yup.InferType<typeof menuFormSchema>;

export interface MenuFormProps {
    menuItemId?: string;
    initialValues?: MenuItemFormValues;
    categories: MenuCategory[];
    onSubmit: (values: MenuItemFormValues) => Promise<void>;
}
