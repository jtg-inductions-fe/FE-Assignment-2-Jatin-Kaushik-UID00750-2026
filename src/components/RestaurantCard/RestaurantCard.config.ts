import { DietConfiguration } from './RestaurantCard.types';

/**
 * A lookup dictionary containing visual and accessibility setups for different restaurant diet types
 */
export const dietConfigurations: Record<string, DietConfiguration> = {
    veg: {
        label: 'Veg',
        color: 'success',
        ariaLabel: 'Vegetarian selection only',
    },
    'non-veg': {
        label: 'Non-Veg',
        color: 'error',
        ariaLabel: 'Non vegetarian selection only',
    },
    both: {
        label: 'Veg & Non-Veg',
        color: 'warning',
        ariaLabel: 'Serves both Vegetarian and Non Vegetarian dishes',
    },
};
