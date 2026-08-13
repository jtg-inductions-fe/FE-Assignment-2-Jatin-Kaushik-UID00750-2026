export type ToastType = 'success' | 'error' | 'warning' | 'info';

/**
 * The internal state structure for managing a popup notification
 */
export interface ToastState {
    open: boolean;
    message: string;
    type: ToastType;
    duration: number;
}

/**
 * Data required to trigger and open a new notification alert
 */
export interface ToastPayload {
    message: string;
    type?: ToastType;
    duration?: number;
}

/**
 * Global interface state for tracking user interface elements
 */
export interface UIState {
    toast: ToastState;
}

/**
 * Configuration options for calling the toast notification hook
 */
export interface UseToastOptions {
    message: string;
    type?: ToastType;
    duration?: number;
}

/**
 * Text configuration content for a confirmation modal
 */
export interface ConfirmDialogState {
    title: string;
    message: string;
}
