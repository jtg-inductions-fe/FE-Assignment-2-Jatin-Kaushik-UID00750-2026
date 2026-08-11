import { Restaurant, RestaurantFormValues } from '@types';

import restaurantsData from '../../mocks/data/restaurants.json';
let allRestaurants = restaurantsData as Restaurant[];

/**
 * Service handler for managing restaurant data operations.
 * Simulates an asynchronous backend database API layer using mock JSON data.
 */
export const restaurantsService = {
    /** Retrieves a restaurant by its unique ID, returning null if not found */
    getRestaurantById: (restaurantId: string): Promise<Restaurant | null> => {
        const restaurant = allRestaurants.find(
            (res) => res.id === restaurantId,
        );
        return Promise.resolve(restaurant ?? null);
    },

    /** Retrieves a complete copy of all restaurant records */
    getAllRestaurants: (): Promise<Restaurant[]> =>
        Promise.resolve([...allRestaurants]),

    /** Filters and returns restaurants belonging to a specific owner ID */
    getMyRestaurants: (ownerId: string): Promise<Restaurant[]> => {
        const myRestaurants = allRestaurants.filter(
            (restaurant) => restaurant.ownerId === ownerId,
        );
        return Promise.resolve(myRestaurants);
    },

    /** Generates a unique ID and appends a new restaurant to the list */
    addRestaurant: (
        payload: RestaurantFormValues & { ownerId: string },
    ): Promise<Restaurant> => {
        const newRestaurant = { ...payload, id: `res_${Date.now()}` };
        allRestaurants.push(newRestaurant);
        return Promise.resolve(newRestaurant);
    },

    /** Searches for an existing restaurant by ID and updates its fields */
    editRestaurant: (payload: Restaurant): Promise<Restaurant> => {
        allRestaurants = allRestaurants.map((restaurant) =>
            restaurant.id === payload.id
                ? { ...restaurant, ...payload }
                : restaurant,
        );
        return Promise.resolve(payload);
    },

    /** Excludes a specific restaurant from the list to simulate deletion */
    deleteRestaurant: (restaurantId: string): Promise<string> => {
        allRestaurants = allRestaurants.filter(
            (restaurant) => restaurant.id !== restaurantId,
        );
        return Promise.resolve(restaurantId);
    },
};
