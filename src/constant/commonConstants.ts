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
    MONDAY: 'monday',
    TUESDAY: 'tuesday',
    WEDNESDAY: 'wednesday',
    THURSDAY: 'thursday',
    FRIDAY: 'friday',
    SATURDAY: 'saturday',
    SUNDAY: 'sunday',
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
