import {
    Address,
    AsyncStatus,
    DayOfWeek,
    RestaurantVegType,
    TimeString,
} from './common.types';

/**
 * Operating schedule for a single day of the week
 */
export interface DayHours {
    day: DayOfWeek;
    isClosed: boolean;
    openTime?: TimeString;
    closeTime?: TimeString;
}

/**
 * Details of a restaurant
 */
export interface Restaurant {
    id: string;
    ownerId: string;
    name: string;
    description: string;
    cuisines: string[];
    vegType: RestaurantVegType;
    address: Address;
    imageUrl: string;
    operatingHours: DayHours[];
}

/** Payload shape for the Add/Edit Restaurant form */
export type RestaurantFormValues = Omit<Restaurant, 'id' | 'ownerId'>;

/** Global state structure for managing restaurant data, including list, loading status, error, and filters. */
export interface RestaurantState {
    list: Restaurant[];
    selectedRestaurant: Restaurant | null;
    status: AsyncStatus;
    error: string | null;
    filters: {
        vegType: RestaurantVegType;
        searchQuery: string;
    };
}
