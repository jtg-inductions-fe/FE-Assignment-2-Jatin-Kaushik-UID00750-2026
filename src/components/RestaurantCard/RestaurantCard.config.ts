import { RESTAURANT_VEG_TYPES } from '@constant';
import { RestaurantVegType } from '@types';

import { DietConfiguration } from './RestaurantCard.types';

/**
 * A lookup dictionary containing visual and accessibility setups for different restaurant diet types
 */
export const dietConfigurations: Record<RestaurantVegType, DietConfiguration> =
    {
        [RESTAURANT_VEG_TYPES.VEG]: {
            label: 'Veg',
            color: 'success',
            ariaLabel: 'Vegetarian selection only',
        },
        [RESTAURANT_VEG_TYPES.NON_VEG]: {
            label: 'Non-Veg',
            color: 'error',
            ariaLabel: 'Non vegetarian selection only',
        },
        [RESTAURANT_VEG_TYPES.ALL]: {
            label: 'Veg & Non-Veg',
            color: 'warning',
            ariaLabel: 'Serves both Vegetarian and Non Vegetarian dishes',
        },
    };
