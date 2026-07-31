export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastState {
    open: boolean;
    message: string;
    type: ToastType;
    duration: number;
}

export interface ConfirmDialogPayload {
    title?: string;
    message: string;
    confirmLabel?: string;
    cancelLabel?: string;
}

export interface ToastPayload {
    message: string;
    type?: ToastType;
    duration?: number;
}

export interface ConfirmDialogState {
    open: boolean;
    title: string;
    message: string;
    confirmLabel: string;
    cancelLabel: string;
}

export interface UIState {
    toast: ToastState;
    confirmDialog: ConfirmDialogState;
}

export interface UseToastOptions {
    message: string;
    type?: ToastType;
    duration?: number;
}
