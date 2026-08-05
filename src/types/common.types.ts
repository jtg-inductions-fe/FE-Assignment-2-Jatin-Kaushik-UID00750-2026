import {
    ASYNC_STATUS,
    DAYS_OF_WEEK,
    ORDER_STATUS,
    RESTAURANT_VEG_TYPES,
    USER_ROLES,
    VEG_TYPES,
} from '@constant';

/**
 * User roles in the application
 */
export type UserRole = (typeof USER_ROLES)[keyof typeof USER_ROLES];

/**
 * Dietary classification for an individual food item
 */
export type VegType = (typeof VEG_TYPES)[keyof typeof VEG_TYPES];

/**
 * Dietary classification for an individual restaurant
 */
export type RestaurantVegType =
    (typeof RESTAURANT_VEG_TYPES)[keyof typeof RESTAURANT_VEG_TYPES];

/**
 * Days of the week
 */
export type DayOfWeek = (typeof DAYS_OF_WEEK)[keyof typeof DAYS_OF_WEEK];

/**
 * Current lifecycle stage of a customer order
 */
export type OrderStatus = (typeof ORDER_STATUS)[keyof typeof ORDER_STATUS];

/**
 * Execution state of an asynchronous operation or API call
 */
export type AsyncStatus = (typeof ASYNC_STATUS)[keyof typeof ASYNC_STATUS];

/** ISO 8601 date-time string, e.g. "2026-07-19T14:32:00.000Z" */
export type ISODateString = string;

/** 24-hour "HH:mm" time string, e.g. "09:00" */
export type TimeString = string;

/**
 * State Structure for address of the restaurant or customer
 */
export interface Address {
    street: string;
    city: string;
    state: string;
    pincode: string;
}
