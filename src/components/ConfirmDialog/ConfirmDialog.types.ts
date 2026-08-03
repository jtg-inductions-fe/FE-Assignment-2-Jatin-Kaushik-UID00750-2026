export interface ConfirmDialogProps {
    open: boolean;
    title: string;
    message: string;
    handleCancel: () => void;
    handleConfirm: () => void;
}
