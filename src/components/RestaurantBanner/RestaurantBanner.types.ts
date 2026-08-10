import { Restaurant } from '@types';

/**
 * Properties for the RestaurantBanner component.
 */
export interface RestaurantBannerProps {
    restaurant: Restaurant;
    onEditHours?: () => void;
    isClosed?: boolean;
}
