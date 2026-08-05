import { DialogTitle } from '@mui/material';

import { UiButton } from '@components/UiButton';

import {
    StyledDialog,
    StyledDialogActions,
    StyledDialogContent,
    StyledDialogContentText,
} from './ConfirmDialog.styles';
import { ConfirmDialogProps } from './ConfirmDialog.types';

/**
 * Custom confirmation dialog modal component.
 * @param props - Component options
 * @param props.open - Visibility trigger flag
 * @param props.title - Main title text string
 * @param props.message - Descriptive body text string
 * @param props.handleCancel - Cancel click handler
 * @param props.handleConfirm - Confirm click handler
 */

export const ConfirmDialog = ({
    open,
    title,
    message,
    handleCancel,
    handleConfirm,
}: ConfirmDialogProps) => (
    <StyledDialog open={open} disableRestoreFocus onClose={handleCancel}>
        <DialogTitle>{title}</DialogTitle>

        <StyledDialogContent>
            <StyledDialogContentText color="text.secondary">
                {message}
            </StyledDialogContentText>
        </StyledDialogContent>

        <StyledDialogActions>
            <UiButton color="inherit" onClick={handleCancel}>
                Cancel
            </UiButton>
            <UiButton variant="contained" onClick={handleConfirm}>
                Confirm
            </UiButton>
        </StyledDialogActions>
    </StyledDialog>
);
