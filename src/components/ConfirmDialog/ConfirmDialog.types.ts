/**
 * Properties required to configure and control a confirmation modal
 */

export interface ConfirmDialogProps {
    open: boolean;
    title: string;
    message: string;
    handleCancel: () => void;
    handleConfirm: () => void;
}
