import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    ConfirmDialogPayload,
    ConfirmState,
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

const initialConfirmState: ConfirmState = {
    open: false,
    title: '',
    message: '',
    confirmLabel: 'Confirm',
    cancelLabel: 'Cancel',
};

const initialState: UIState = {
    toast: initialToastState,
    confirm: initialConfirmState,
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
        showConfirmAction: (
            state,
            action: PayloadAction<ConfirmDialogPayload>,
        ) => {
            state.confirm.open = true;
            state.confirm.title = action.payload.title ?? 'Confirm Action';
            state.confirm.message = action.payload.message;
            state.confirm.confirmLabel =
                action.payload.confirmLabel ?? 'Confirm';
            state.confirm.cancelLabel = action.payload.cancelLabel ?? 'Cancel';
        },
        hideConfirmAction: (state) => {
            state.confirm.open = false;
        },
    },
});

export const {
    showToastAction,
    hideToastAction,
    showConfirmAction,
    hideConfirmAction,
} = uiSlice.actions;

export default uiSlice.reducer;
