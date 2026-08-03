import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    ConfirmDialogPayload,
    ConfirmDialogState,
    ToastPayload,
    ToastState,
    UIState,
} from '@types';

const initialToastState: ToastState = {
    open: false,
    message: '',
    type: 'info',
    duration: 4000,
};

const initialConfirmDialogState: ConfirmDialogState = {
    open: false,
    title: '',
    message: '',
    confirmLabel: 'Confirm',
    cancelLabel: 'Cancel',
};

const initialState: UIState = {
    toast: initialToastState,
    confirmDialog: initialConfirmDialogState,
};

/**
 * Redux slice handling global UI overlay states like toasts and confirmation modals.
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

        /**
         * Opens verification confirmation dialog screen.
         * @param action.payload - Text content and button overrides
         */

        showConfirmDialogAction: (
            state,
            action: PayloadAction<ConfirmDialogPayload>,
        ) => {
            state.confirmDialog = {
                ...initialConfirmDialogState,
                ...action.payload,
                open: true,
            };
        },

        /* Hides verification confirmation dialog screen. */

        hideConfirmDialogAction: (state) => {
            state.confirmDialog.open = false;
        },
    },
});

export const {
    showToastAction,
    hideToastAction,
    showConfirmDialogAction,
    hideConfirmDialogAction,
} = uiSlice.actions;

export default uiSlice.reducer;
