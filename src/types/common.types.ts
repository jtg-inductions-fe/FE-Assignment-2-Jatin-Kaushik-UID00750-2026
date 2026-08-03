import {
    ASYNC_STATUS,
    DAYS_OF_WEEK,
    ORDER_STATUS,
    RESTAURANT_VEG_TYPES,
    USER_ROLES,
    VEG_TYPES,
} from '@constant';

export type UserRole = (typeof USER_ROLES)[keyof typeof USER_ROLES];

export type VegType = (typeof VEG_TYPES)[keyof typeof VEG_TYPES];

export type RestaurantVegType =
    (typeof RESTAURANT_VEG_TYPES)[keyof typeof RESTAURANT_VEG_TYPES];

export type DayOfWeek = (typeof DAYS_OF_WEEK)[keyof typeof DAYS_OF_WEEK];

export type OrderStatus = (typeof ORDER_STATUS)[keyof typeof ORDER_STATUS];

export type AsyncStatus = (typeof ASYNC_STATUS)[keyof typeof ASYNC_STATUS];

/** ISO 8601 date-time string, e.g. "2026-07-19T14:32:00.000Z" */
export type ISODateString = string;

/** 24-hour "HH:mm" time string, e.g. "09:00" */
export type TimeString = string;

/** Ask if single address string or complete address options */
export interface Address {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    pincode: string;
}
