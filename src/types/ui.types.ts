export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastState {
    open: boolean;
    message: string;
    type: ToastType;
    duration: number;
}

export interface ToastPayload {
    message: string;
    type?: ToastType;
    duration?: number;
}

export interface UIState {
    toast: ToastState;
}

export interface UseToastOptions {
    message: string;
    type?: ToastType;
    duration?: number;
}

export interface ConfirmDialogState {
    title: string;
    message: string;
}
