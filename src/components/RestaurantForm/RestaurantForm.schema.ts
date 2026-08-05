import * as yup from 'yup';

import { DayOfWeek, RestaurantVegType } from '@types';

/** Regular expression validating 24-hour time values in HH:MM format */
const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

/** Schema representing operational schedules for a single day of the week */
const dayHoursSchema = yup.object().shape({
    day: yup.string().required() as yup.Schema<DayOfWeek>,
    isClosed: yup.boolean().required(),
    openTime: yup.string().when('isClosed', {
        is: false,
        then: (schema) =>
            schema
                .matches(timeRegex, 'Must be HH:MM format')
                .required('Open time required'),
        otherwise: (schema) => schema.optional().nullable(),
    }),
    closeTime: yup.string().when('isClosed', {
        is: false,
        then: (schema) =>
            schema
                .matches(timeRegex, 'Must be HH:MM format')
                .required('Close time required'),
        otherwise: (schema) => schema.optional().nullable(),
    }),
});

/** Validation schema mapping restaurant configuration details */
export const restaurantValidationSchema = yup.object().shape({
    name: yup
        .string()
        .min(3, 'Name must be at least 3 characters')
        .required('Name is required'),
    description: yup
        .string()
        .min(10, 'Description must be at least 10 characters')
        .required('Description is required'),
    cuisines: yup
        .array()
        .of(yup.string().required())
        .min(1, 'Select at least one cuisine')
        .required('Cuisines are required'),
    vegType: yup
        .string()
        .oneOf(['veg', 'non-veg', 'both'])
        .required(
            'Veg type selection is required',
        ) as yup.Schema<RestaurantVegType>,
    address: yup.object().shape({
        street: yup.string().required('Street is required'),
        city: yup.string().required('City is required'),
        state: yup.string().required('State is required'),
        pincode: yup
            .string()
            .matches(/^\d{5,6}$/, 'Must be a valid pin code')
            .required('Pin code is required'),
    }),
    imageUrl: yup
        .string()
        .url('Must be a valid image URL')
        .required('Image URL is required'),
    operatingHours: yup.array().of(dayHoursSchema).length(7).required(),
});
