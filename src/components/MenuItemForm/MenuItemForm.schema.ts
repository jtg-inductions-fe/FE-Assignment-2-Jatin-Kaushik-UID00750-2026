import * as yup from 'yup';

import { VALIDATION_MESSAGES, VEG_TYPES } from '@constant';
import { VegType } from '@types';

/** Menu Item Validation Schema */
export const menuFormSchema = yup
    .object({
        categoryId: yup.string().required('Category is required'),
        name: yup
            .string()
            .required(VALIDATION_MESSAGES.REQUIRED_FIELD)
            .min(3, VALIDATION_MESSAGES.INVALID_NAME),
        description: yup
            .string()
            .required(VALIDATION_MESSAGES.REQUIRED_FIELD)
            .min(10, 'Description must be at least 10 characters'),
        price: yup
            .number()
            .typeError('Price must be a valid number')
            .required(VALIDATION_MESSAGES.REQUIRED_FIELD)
            .positive('Price must be greater than 0'),
        imageUrl: yup
            .string()
            .required(VALIDATION_MESSAGES.REQUIRED_FIELD)
            .url('Must be a valid URL'),
        vegType: yup
            .mixed<VegType>()
            .oneOf(Object.values(VEG_TYPES), 'Please select a valid type')
            .required(VALIDATION_MESSAGES.REQUIRED_FIELD),
        stock: yup
            .number()
            .typeError('Stock must be a valid integer')
            .required(VALIDATION_MESSAGES.REQUIRED_FIELD)
            .integer('Stock must be a whole number')
            .min(0, 'Stock cannot be negative'),
    })
    .required();
