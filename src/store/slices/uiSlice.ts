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

let resolvePointer: ((value: boolean) => void) | null = null;

export const setConfirmResolve = (resolve: (value: boolean) => void) => {
    resolvePointer = resolve;
};

export const getConfirmResolve = () => resolvePointer;

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        // Toast Operations
        showToastAction: (state, action: PayloadAction<ToastPayload>) => {
            state.toast = {
                ...initialToastState,
                ...action.payload,
                open: true,
            };
        },
        hideToastAction: (state) => {
            state.toast.open = false;
        },

        // Confirm Dialog Operations
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
        hideConfirmDialogAction: (state) => {
            state.confirmDialog.open = false;
            resolvePointer = null;
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
