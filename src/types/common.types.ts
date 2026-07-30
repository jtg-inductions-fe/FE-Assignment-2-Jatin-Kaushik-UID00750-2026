export type UserRole = 'customer' | 'owner';

export type VegType = 'veg' | 'non-veg';

/** A restaurant can serve only veg, only non-veg, or both. */
export type RestaurantVegType = 'veg' | 'non-veg' | 'both';

export type DayOfWeek =
    | 'monday'
    | 'tuesday'
    | 'wednesday'
    | 'thursday'
    | 'friday'
    | 'saturday'
    | 'sunday';

export type OrderStatus =
    | 'pending'
    | 'accepted'
    | 'preparing'
    | 'out-for-delivery'
    | 'delivered'
    | 'rejected';

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
