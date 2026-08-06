import { restaurantsService } from './restaurantsService';

/**
 * Configuration mapping for restaurant-related async service actions.
 * Groups action types, API service calls, and user-facing fallback error messages.
 */
export const RESTAURANTS_SERVICE_ACTIONS = {
    GET_ALL: {
        type: 'restaurants/getAll',
        service: restaurantsService.getAllRestaurants,
        fallbackMessage: 'Failed to fetch restaurants.',
    },
    GET_MY: {
        type: 'restaurants/getMyRestaurants',
        service: restaurantsService.getMyRestaurants,
        fallbackMessage: 'Failed to load your restaurants',
    },
    ADD_NEW: {
        type: 'restaurants/add',
        service: restaurantsService.addRestaurant,
        fallbackMessage: 'Failed to create new restaurant',
    },
    EDIT: {
        type: 'restaurants/edit',
        service: restaurantsService.editRestaurant,
        fallbackMessage: 'Failed to update restaurant information',
    },
    DELETE: {
        type: 'restaurants/delete',
        service: restaurantsService.deleteRestaurant,
        fallbackMessage: 'Failed to remove restaurant',
    },
};
