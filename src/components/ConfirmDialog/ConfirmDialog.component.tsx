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
        dispatch(hideConfirmDialogAction());

        const resolve = getConfirmResolve();
        if (resolve) resolve(choice);
    };

    return (
        <StyledDialog
            open={open}
            disableRestoreFocus
            onClose={() => handleAction(false)}
        >
            <DialogTitle>{title}</DialogTitle>

            <StyledDialogContent>
                <StyledDialogContentText color="text.secondary">
                    {message}
                </StyledDialogContentText>
            </StyledDialogContent>

            <StyledDialogActions>
                <UiButton color="inherit" onClick={() => handleAction(false)}>
                    {cancelLabel}
                </UiButton>
                <UiButton
                    variant="contained"
                    onClick={() => handleAction(true)}
                >
                    {confirmLabel}
                </UiButton>
            </StyledDialogActions>
        </StyledDialog>
    );
};
