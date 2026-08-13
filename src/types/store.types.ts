import { store } from '@store/store';

/**
 * Complete data structure of states inside the Redux store
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 * The function used to send actions and trigger changes in the store
 */
export type AppDispatch = typeof store.dispatch;
