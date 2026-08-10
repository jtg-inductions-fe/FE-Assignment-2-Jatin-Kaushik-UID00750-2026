import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    addRestaurant,
    deleteRestaurant,
    editRestaurant,
    fetchAllRestaurants,
    fetchMyRestaurants,
} from '@store/thunks/restaurantsThunk';
import type { Restaurant, RestaurantState, RestaurantVegType } from '@types';

const initialState: RestaurantState = {
    list: [],
    status: 'idle',
    error: null,
    filters: {
        vegType: 'all',
        searchQuery: '',
    },
};

const restaurantSlice = createSlice({
    name: 'restaurants',
    initialState,
    reducers: {
        setVegFilter: (state, action: PayloadAction<RestaurantVegType>) => {
            state.filters.vegType = action.payload;
        },
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.filters.searchQuery = action.payload;
        },
        clearFilters: (state) => {
            state.filters = initialState.filters;
        },
    },
    extraReducers: (builder) => {
        builder
            // Fetch All Restaurants
            .addCase(fetchAllRestaurants.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(
                fetchAllRestaurants.fulfilled,
                (state, action: PayloadAction<Restaurant[]>) => {
                    state.status = 'succeeded';
                    state.list = action.payload;
                },
            )
            .addCase(fetchAllRestaurants.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload ?? 'An unknown error occurred';
            })

            // Fetch Owner Restaurants
            .addCase(fetchMyRestaurants.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(
                fetchMyRestaurants.fulfilled,
                (state, action: PayloadAction<Restaurant[]>) => {
                    state.status = 'succeeded';
                    state.list = action.payload;
                },
            )
            .addCase(fetchMyRestaurants.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload ?? 'An unknown error occurred';
            })

            // Add Restaurant
            .addCase(addRestaurant.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(
                addRestaurant.fulfilled,
                (state, action: PayloadAction<Restaurant>) => {
                    state.status = 'succeeded';
                    state.list.push(action.payload);
                },
            )
            .addCase(addRestaurant.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload ?? 'An unknown error occurred';
            })

            // Edit Restaurant
            .addCase(editRestaurant.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(
                editRestaurant.fulfilled,
                (state, action: PayloadAction<Restaurant>) => {
                    state.status = 'succeeded';
                    const index = state.list.findIndex(
                        (r) => r.id === action.payload.id,
                    );
                    if (index !== -1) state.list[index] = action.payload;
                },
            )
            .addCase(editRestaurant.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload ?? 'An unknown error occurred';
            })

            // Delete Restaurant
            .addCase(deleteRestaurant.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(
                deleteRestaurant.fulfilled,
                (state, action: PayloadAction<string>) => {
                    state.status = 'succeeded';
                    state.list = state.list.filter(
                        (r) => r.id !== action.payload,
                    );
                },
            )
            .addCase(deleteRestaurant.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload ?? 'An unknown error occurred';
            });
    },
});

export const { setVegFilter, setSearchQuery, clearFilters } =
    restaurantSlice.actions;
export default restaurantSlice.reducer;
