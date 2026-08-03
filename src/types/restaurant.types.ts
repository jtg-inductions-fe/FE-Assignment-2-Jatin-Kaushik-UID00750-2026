import {
    Address,
    DayOfWeek,
    RestaurantVegType,
    TimeString,
} from './common.types';

export interface DayHours {
    day: DayOfWeek;
    isClosed: boolean;
    openTime?: TimeString;
    closeTime?: TimeString;
}

export interface Restaurant {
    id: string;
    ownerId: string;
    name: string;
    description: string;
    /** e.g. ["North Indian", "Chinese"] — used for display tags */
    cuisines: string[];
    vegType: RestaurantVegType;
    address: Address;
    imageUrl: string;
    operatingHours: DayHours[];
}

/** Payload shape for the Add/Edit Restaurant form */
export type RestaurantFormValues = Omit<Restaurant, 'id' | 'ownerId'>;
