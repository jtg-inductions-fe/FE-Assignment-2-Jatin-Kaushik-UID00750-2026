import { RESTAURANTS_SERVICE_ACTIONS } from '@services/restaurantsService/restaurantsService.config';
import { Restaurant } from '@types';
import { asyncServiceThunk } from '@utils';

export const fetchAllRestaurants = asyncServiceThunk<void, Restaurant[]>(
    RESTAURANTS_SERVICE_ACTIONS.GET_ALL,
);

export const fetchMyRestaurants = asyncServiceThunk(
    RESTAURANTS_SERVICE_ACTIONS.GET_MY,
);

export const addRestaurant = asyncServiceThunk(
    RESTAURANTS_SERVICE_ACTIONS.ADD_NEW,
);

export const editRestaurant = asyncServiceThunk(
    RESTAURANTS_SERVICE_ACTIONS.EDIT,
);

export const deleteRestaurant = asyncServiceThunk(
    RESTAURANTS_SERVICE_ACTIONS.DELETE,
);
