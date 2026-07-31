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

let resolvePointer: (value: boolean) => void = () => {};

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
            state.toast.open = true;
            state.toast.message = action.payload.message;
            state.toast.type = action.payload.type ?? 'info';
            state.toast.duration = action.payload.duration ?? 4000;
        },
        hideToastAction: (state) => {
            state.toast.open = false;
        },

        // Confirm Dialog Operations
        showConfirmDialogAction: (
            state,
            action: PayloadAction<ConfirmDialogPayload>,
        ) => {
            state.confirmDialog.open = true;
            state.confirmDialog.title =
                action.payload.title ?? 'Confirm Action';
            state.confirmDialog.message = action.payload.message;
            state.confirmDialog.confirmLabel =
                action.payload.confirmLabel ?? 'Confirm';
            state.confirmDialog.cancelLabel =
                action.payload.cancelLabel ?? 'Cancel';
        },
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
