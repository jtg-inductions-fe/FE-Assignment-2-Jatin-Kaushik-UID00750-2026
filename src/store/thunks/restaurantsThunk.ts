import { RESTAURANTS_SERVICE_ACTIONS } from '@services/restaurantsService';
import { Restaurant } from '@types';
import { asyncServiceThunk } from '@utils';

/** Asynchronous Thunk action that fetches all restaurants for public listings. */
export const fetchAllRestaurants = asyncServiceThunk<void, Restaurant[]>(
    RESTAURANTS_SERVICE_ACTIONS.GET_ALL,
);

/** Asynchronous Thunk action that fetches restaurants owned by the current user. */
export const fetchMyRestaurants = asyncServiceThunk(
    RESTAURANTS_SERVICE_ACTIONS.GET_MY,
);

/** Asynchronous Thunk action that creates a new restaurant listing profile. */
export const addRestaurant = asyncServiceThunk(
    RESTAURANTS_SERVICE_ACTIONS.ADD_NEW,
);

/** Asynchronous Thunk action that updates an existing restaurant profile. */
export const editRestaurant = asyncServiceThunk(
    RESTAURANTS_SERVICE_ACTIONS.EDIT,
);

/** Asynchronous Thunk action that permanently removes a restaurant profile. */
export const deleteRestaurant = asyncServiceThunk(
    RESTAURANTS_SERVICE_ACTIONS.DELETE,
);
