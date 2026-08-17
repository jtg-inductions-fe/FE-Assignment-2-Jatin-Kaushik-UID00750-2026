import * as yup from 'yup';

import { RESTAURANT_VEG_TYPES, VALIDATION_MESSAGES } from '@constant';
import { DayHours, DayOfWeek, RestaurantVegType } from '@types';

/** Regular expression validating 24-hour time values in HH:MM format */
const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

/** Schema representing operational schedules for a single day of the week */
const dayHoursSchema = yup.object<DayHours>().shape({
    day: yup.string().required() as yup.Schema<DayOfWeek>,
    isClosed: yup.boolean().required(),
    openTime: yup.string().when('isClosed', {
        is: false,
        then: (schema) =>
            schema
                .matches(timeRegex, VALIDATION_MESSAGES.INVALID_TIME)
                .required(VALIDATION_MESSAGES.REQUIRED_FIELD),
        otherwise: (schema) => schema.optional().nullable(),
    }),
    closeTime: yup.string().when('isClosed', {
        is: false,
        then: (schema) =>
            schema
                .matches(timeRegex, VALIDATION_MESSAGES.INVALID_TIME)
                .required(VALIDATION_MESSAGES.REQUIRED_FIELD)
                .test(
                    'is-greater',
                    VALIDATION_MESSAGES.INVALID_CLOSE_TIME,
                    (value, context) => {
                        const { openTime } = context.parent as {
                            openTime: string | null;
                        };
                        if (!openTime || !value) return true;
                        return value > openTime;
                    },
                ),
        otherwise: (schema) => schema.optional().nullable(),
    }),
});

/** Validation schema mapping restaurant configuration details */
export const restaurantValidationSchema = yup.object().shape({
    name: yup
        .string()
        .min(3, VALIDATION_MESSAGES.INVALID_NAME)
        .required(VALIDATION_MESSAGES.REQUIRED_FIELD),
    description: yup
        .string()
        .min(10, VALIDATION_MESSAGES.INVALID_DESCRIPTION)
        .required(VALIDATION_MESSAGES.REQUIRED_FIELD),
    cuisines: yup
        .array()
        .of(yup.string().required())
        .min(1, VALIDATION_MESSAGES.INVALID_CUISINES)
        .required(VALIDATION_MESSAGES.REQUIRED_FIELD),
    vegType: yup
        .string()
        .oneOf(Object.values(RESTAURANT_VEG_TYPES))
        .required(
            VALIDATION_MESSAGES.REQUIRED_FIELD,
        ) as yup.Schema<RestaurantVegType>,
    address: yup.object().shape({
        street: yup.string().required(VALIDATION_MESSAGES.REQUIRED_FIELD),
        city: yup.string().required(VALIDATION_MESSAGES.REQUIRED_FIELD),
        state: yup.string().required(VALIDATION_MESSAGES.REQUIRED_FIELD),
        pincode: yup
            .string()
            .matches(/^\d{5,6}$/, VALIDATION_MESSAGES.INVALID_PINCODE)
            .required(VALIDATION_MESSAGES.REQUIRED_FIELD),
    }),
    imageUrl: yup
        .string()
        .url(VALIDATION_MESSAGES.INVALID_IMAGE_URL)
        .required(VALIDATION_MESSAGES.REQUIRED_FIELD),
    operatingHours: yup.array().of(dayHoursSchema).length(7).required(),
});
