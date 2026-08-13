import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@types';

const selectRawOrders = (state: RootState) => state.orders.items;

/**
 * Memoized selector that returns orders sorted by placement date (Newest / Latest first).
 * It automatically caches the result and only recalculates if state.orders.items changes.
 */
export const selectOrdersLatestFirst = createSelector(
    [selectRawOrders],
    (items) =>
        [...items].sort(
            (a, b) => Date.parse(b.placedAt) - Date.parse(a.placedAt),
        ),
);
