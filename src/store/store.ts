import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from '@store/slices/authSlice';
import restaurantReducer from '@store/slices/restaurantsSlice';
import uiReducer from '@store/slices/uiSlice';

/** Persistence settings for session authentication keys. */

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['currentUser', 'isAuthenticated'],
};

const rootReducer = combineReducers({
    ui: uiReducer,
    auth: persistReducer(authPersistConfig, authReducer),
    restaurants: restaurantReducer,
});

/**
 * Global Redux application store configuration.
 */

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store);
