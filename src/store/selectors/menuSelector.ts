import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@types';

const selectRawCategories = (state: RootState) => state.menu.categories;
const selectRawItems = (state: RootState) => state.menu.items;

/**
 * Memoized selector that structures items with their relevant visual categories.
 */
export const selectCategorizedMenu = createSelector(
    [selectRawCategories, selectRawItems],
    (categories, items) =>
        categories.map((category) => ({
            ...category,
            menuItems: items.filter((item) => item.categoryId === category.id),
        })),
);
