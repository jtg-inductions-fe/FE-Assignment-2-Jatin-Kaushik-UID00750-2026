/**
 * Common constants used across the application
 * @constant
 */

export const USER_ROLES = {
    CUSTOMER: 'customer',
    OWNER: 'owner',
} as const;

export const VEG_TYPES = {
    VEG: 'veg',
    NON_VEG: 'non-veg',
} as const;

export const RESTAURANT_VEG_TYPES = {
    VEG: 'veg',
    NON_VEG: 'non-veg',
    BOTH: 'both',
} as const;

export const DAYS_OF_WEEK = {
    MONDAY: 'Monday',
    TUESDAY: 'Tuesday',
    WEDNESDAY: 'Wednesday',
    THURSDAY: 'Thursday',
    FRIDAY: 'Friday',
    SATURDAY: 'Saturday',
    SUNDAY: 'Sunday',
} as const;

export const ORDER_STATUS = {
    PENDING: 'pending',
    ACCEPTED: 'accepted',
    PREPARING: 'preparing',
    OUT_FOR_DELIVERY: 'out-for-delivery',
    DELIVERED: 'delivered',
    REJECTED: 'rejected',
} as const;

export const ASYNC_STATUS = {
    IDLE: 'idle',
    LOADING: 'loading',
    SUCCEEDED: 'succeeded',
    FAILED: 'failed',
} as const;
