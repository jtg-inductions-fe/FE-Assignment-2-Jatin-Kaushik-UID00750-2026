/**
 * Properties required to configure and control a confirmation modal
 */

export interface ConfirmDialogProps {
    /** Visibility trigger flag */
    open: boolean;
    /** Main title text string */
    title: string;
    /** Descriptive body text string */
    message: string;
    /** Cancel click handler */
    handleCancel: () => void;
    /** Confirm click handler */
    handleConfirm: () => void;
}
