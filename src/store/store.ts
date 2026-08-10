import { configureStore } from '@reduxjs/toolkit';
import uiReducer from '@store/slices/uiSlice';

/**
 * Global Redux application store configuration.
 */

export const store = configureStore({
    reducer: {
        ui: uiReducer,
    },
});
