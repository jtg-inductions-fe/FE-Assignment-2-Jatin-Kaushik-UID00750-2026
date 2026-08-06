import { Restaurant, RestaurantFormValues } from '@types';

import restaurantsData from '../../mocks/data/restaurants.json';
let allRestaurants = restaurantsData as Restaurant[];

export const restaurantsService = {
    getAllRestaurants: (): Promise<Restaurant[]> =>
        Promise.resolve([...allRestaurants]),

    getMyRestaurants: (ownerId: string): Promise<Restaurant[]> => {
        const myRestaurants = allRestaurants.filter(
            (restaurant) => restaurant.ownerId === ownerId,
        );
        return Promise.resolve(myRestaurants);
    },

    addRestaurant: (
        payload: RestaurantFormValues & { ownerId: string },
    ): Promise<Restaurant> => {
        const newRestaurant = { ...payload, id: `res_${Date.now()}` };
        allRestaurants.push(newRestaurant);
        return Promise.resolve(newRestaurant);
    },

    editRestaurant: (payload: Restaurant): Promise<Restaurant> => {
        allRestaurants = allRestaurants.map((restaurant) =>
            restaurant.id === payload.id
                ? { ...restaurant, ...payload }
                : restaurant,
        );
        return Promise.resolve(payload);
    },

    deleteRestaurant: (restaurantId: string): Promise<string> => {
        allRestaurants = allRestaurants.filter(
            (restaurant) => restaurant.id !== restaurantId,
        );
        return Promise.resolve(restaurantId);
    },
};
