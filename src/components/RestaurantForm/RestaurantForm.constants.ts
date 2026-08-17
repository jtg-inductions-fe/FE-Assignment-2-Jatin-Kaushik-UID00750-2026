import { DAYS_OF_WEEK, RESTAURANT_VEG_TYPES } from '@constant';
import { RestaurantFormValues } from '@types';

/** Labels representing each stage of the multi-step restaurant details form  */
export const RESTAURANT_FORM_STEPS = [
    'Basic Information',
    'Address',
    'Operating Hours',
];

/** An array containing all valid days of the week */
export const DAYS = Object.values(DAYS_OF_WEEK);

/** Predefined dictionary list of cuisine options available for selection in the form */
export const CUISINE_OPTIONS = [
    'Italian',
    'North Indian',
    'South Indian',
    'Street Food',
    'Chinese',
    'Mexican',
    'American',
    'Japanese',
    'Thai',
    'Mediterranean',
];

/** Key-value mapping array structure for veg type options with value and label */
export const VEG_OPTIONS = [
    { value: RESTAURANT_VEG_TYPES.VEG, label: 'Vegetarian Only' },
    { value: RESTAURANT_VEG_TYPES.NON_VEG, label: 'Non-Vegetarian Only' },
    { value: RESTAURANT_VEG_TYPES.ALL, label: 'Serving Both' },
];

/**
 * Restaurant form field names constants
 * @constant
 */
export const RESTAURANT_FORM_FIELD_NAMES = {
    NAME: 'name',
    DESCRIPTION: 'description',
    CUISINIES: 'cuisines',
    VEG_TYPE: 'vegType',
    IMAGE_URL: 'imageUrl',
    ADDRESS: 'address',
    ADDRESS_STREET: 'address.street',
    ADDRESS_CITY: 'address.city',
    ADDRESS_STATE: 'address.state',
    ADDRESS_PINCODE: 'address.pincode',
    OPERATING_HOURS: 'operatingHours',
    STREET: 'street',
    CITY: 'city',
    STATE: 'state',
    PINCODE: 'pincode',
    DAY: 'day',
    IS_CLOSED: 'isClosed',
    OPEN_TIME: 'openTime',
    CLOSE_TIME: 'closeTime',
} as const;

/** Default values for restaurant form fields */
export const defaultFormValues: RestaurantFormValues = {
    [RESTAURANT_FORM_FIELD_NAMES.NAME]: '',
    [RESTAURANT_FORM_FIELD_NAMES.DESCRIPTION]: '',
    [RESTAURANT_FORM_FIELD_NAMES.CUISINIES]: [],
    [RESTAURANT_FORM_FIELD_NAMES.VEG_TYPE]: RESTAURANT_VEG_TYPES.ALL,
    [RESTAURANT_FORM_FIELD_NAMES.IMAGE_URL]: '',
    [RESTAURANT_FORM_FIELD_NAMES.ADDRESS]: {
        [RESTAURANT_FORM_FIELD_NAMES.STREET]: '',
        [RESTAURANT_FORM_FIELD_NAMES.CITY]: '',
        [RESTAURANT_FORM_FIELD_NAMES.STATE]: '',
        [RESTAURANT_FORM_FIELD_NAMES.PINCODE]: '',
    },
    [RESTAURANT_FORM_FIELD_NAMES.OPERATING_HOURS]: DAYS.map((day) => ({
        [RESTAURANT_FORM_FIELD_NAMES.DAY]: day,
        [RESTAURANT_FORM_FIELD_NAMES.IS_CLOSED]: false,
        [RESTAURANT_FORM_FIELD_NAMES.OPEN_TIME]: '09:00',
        [RESTAURANT_FORM_FIELD_NAMES.CLOSE_TIME]: '22:00',
    })),
};
