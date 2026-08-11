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

/** Default values for restaurant form fields */
export const defaultFormValues: RestaurantFormValues = {
    name: '',
    description: '',
    cuisines: [],
    vegType: RESTAURANT_VEG_TYPES.ALL,
    imageUrl: '',
    address: { street: '', city: '', state: '', pincode: '' },
    operatingHours: DAYS.map((day) => ({
        day,
        isClosed: false,
        openTime: '09:00',
        closeTime: '22:00',
    })),
};
