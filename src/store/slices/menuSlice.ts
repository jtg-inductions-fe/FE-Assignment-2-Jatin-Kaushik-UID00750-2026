import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    addMenuItem,
    deleteMenuItem,
    editMenuItem,
    fetchMenuByRestaurant,
    fetchMenuItemById,
} from '@store/thunks/menuThunk';
import { MenuItem, MenuState } from '@types';

const initialState: MenuState = {
    categories: [],
    items: [],
    selectedMenuItem: null,
    status: 'idle',
    error: null,
};

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        /** Clears the menu state, resetting categories, items, status, and error. */
        clearMenuState: (state) => {
            state.categories = [];
            state.items = [];
            state.status = 'idle';
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // Fetch Menu Items
            .addCase(fetchMenuByRestaurant.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchMenuByRestaurant.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.categories = action.payload.categories.sort(
                    (a, b) => a.displayOrder - b.displayOrder,
                );
                state.items = action.payload.items;
            })
            .addCase(fetchMenuByRestaurant.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload ?? 'An unexpected error occurred';
            })

            // Fetch Menu Item by Id
            .addCase(fetchMenuItemById.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(
                fetchMenuItemById.fulfilled,
                (state, action: PayloadAction<MenuItem | null>) => {
                    state.status = 'succeeded';
                    state.selectedMenuItem = action.payload;
                },
            )
            .addCase(fetchMenuItemById.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload ?? 'An unknown error occurred';
            })

            // Add Menu Item
            .addCase(addMenuItem.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(
                addMenuItem.fulfilled,
                (state, action: PayloadAction<MenuItem>) => {
                    state.status = 'succeeded';
                    state.items.push(action.payload);
                },
            )
            .addCase(addMenuItem.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload ?? 'Failed to add item';
            })

            // Edit Menu Item
            .addCase(editMenuItem.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(
                editMenuItem.fulfilled,
                (state, action: PayloadAction<MenuItem>) => {
                    state.status = 'succeeded';
                    const idx = state.items.findIndex(
                        (item) => item.id === action.payload.id,
                    );
                    if (idx !== -1) {
                        state.items[idx] = action.payload;
                    }
                },
            )
            .addCase(editMenuItem.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload ?? 'Failed to edit item';
            })

            // Delete Menu Item
            .addCase(deleteMenuItem.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(
                deleteMenuItem.fulfilled,
                (state, action: PayloadAction<string>) => {
                    state.status = 'succeeded';
                    state.items = state.items.filter(
                        (item) => item.id !== action.payload,
                    );
                },
            )
            .addCase(deleteMenuItem.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload ?? 'Failed to delete item';
            });
    },
});

export const { clearMenuState } = menuSlice.actions;
export default menuSlice.reducer;
