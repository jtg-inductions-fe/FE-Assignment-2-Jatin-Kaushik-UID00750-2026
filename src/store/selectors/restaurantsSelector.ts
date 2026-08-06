import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@types';

const selectRestaurantState = (state: RootState) => state.restaurants;

export const selectAllRestaurants = createSelector(
    [selectRestaurantState],
    (state) => state.list,
);

export const selectRestaurantFilters = createSelector(
    [selectRestaurantState],
    (state) => state.filters,
);

/** Memoized combination of filters and text search matches */
export const selectFilteredRestaurants = createSelector(
    [selectAllRestaurants, selectRestaurantFilters],
    (list, filters) => {
        const { vegType, searchQuery } = filters;
        const cleanedQuery = searchQuery.trim().toLowerCase();

        return list.filter((restaurant) => {
            const matchesVeg =
                vegType === 'all' || restaurant.vegType === vegType;
            const matchesSearch =
                cleanedQuery === '' ||
                restaurant.name.toLowerCase().includes(cleanedQuery) ||
                restaurant.cuisines.some((c) =>
                    c.toLowerCase().includes(cleanedQuery),
                );

            return matchesVeg && matchesSearch;
        });
    },
);
