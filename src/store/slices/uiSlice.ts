import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ToastPayload, ToastState, UIState } from '@types';

const initialToastState: ToastState = {
    open: false,
    message: '',
    type: 'info',
    duration: 4000,
};

const initialState: UIState = {
    toast: initialToastState,
};

/**
 * Redux slice handling global UI overlay states like toasts.
 */

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        /**
         * Opens toast notification banner.
         * @param action.payload - Banner customization options
         */

        showToastAction: (state, action: PayloadAction<ToastPayload>) => {
            state.toast = {
                ...initialToastState,
                ...action.payload,
                open: true,
            };
        },

        /* Hides toast notification banner. */

        hideToastAction: (state) => {
            state.toast.open = false;
        },
    },
});

export const { showToastAction, hideToastAction } = uiSlice.actions;

export default uiSlice.reducer;
