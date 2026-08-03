import { DialogTitle } from '@mui/material';

import UiButton from '@components/UiButton/UiButton.component';
import { useAppDispatch, useAppSelector } from '@hooks';
import {
    getConfirmResolve,
    hideConfirmDialogAction,
} from '@store/slices/uiSlice';

import {
    StyledDialog,
    StyledDialogActions,
    StyledDialogContent,
    StyledDialogContentText,
} from './ConfirmDialog.styles';

export const ConfirmDialog = () => {
    const dispatch = useAppDispatch();

    const { open, title, message, confirmLabel, cancelLabel } = useAppSelector(
        (state) => state.ui.confirmDialog,
    );

    const handleAction = (choice: boolean) => {
        const resolve = getConfirmResolve();
        if (resolve) resolve(choice);
        dispatch(hideConfirmDialogAction());
    };

    const handleConfirm = () => handleAction(true);
    const handleCancel = () => handleAction(false);

    return (
        <StyledDialog open={open} disableRestoreFocus onClose={handleCancel}>
            <DialogTitle>{title}</DialogTitle>

            <StyledDialogContent>
                <StyledDialogContentText color="text.secondary">
                    {message}
                </StyledDialogContentText>
            </StyledDialogContent>

            <StyledDialogActions>
                <UiButton color="inherit" onClick={handleCancel}>
                    {cancelLabel}
                </UiButton>
                <UiButton variant="contained" onClick={handleConfirm}>
                    {confirmLabel}
                </UiButton>
            </StyledDialogActions>
        </StyledDialog>
    );
};
