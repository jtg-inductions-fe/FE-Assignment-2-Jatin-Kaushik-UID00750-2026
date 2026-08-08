import * as yup from 'yup';

import { VEG_TYPES } from '@constant';
import { VegType } from '@types';

/** Menu Item Validation Schema */
export const menuFormSchema = yup
    .object({
        categoryId: yup.string().required('Category is required'),
        name: yup
            .string()
            .required('Name is required')
            .min(3, 'Name must be at least 3 characters'),
        description: yup
            .string()
            .required('Description is required')
            .min(10, 'Description must be at least 10 characters'),
        price: yup
            .number()
            .typeError('Price must be a valid number')
            .required('Price is required')
            .positive('Price must be greater than 0'),
        imageUrl: yup
            .string()
            .required('Display Image URL is required')
            .url('Must be a valid URL'),
        vegType: yup
            .mixed<VegType>()
            .oneOf(Object.values(VEG_TYPES), 'Please select a valid type')
            .required('Veg type selection is required'),
        stock: yup
            .number()
            .typeError('Stock must be a valid integer')
            .required('Stock is required')
            .integer('Stock must be a whole number')
            .min(0, 'Stock cannot be negative'),
    })
    .required();
