import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
} from '@mui/material';
import { styled } from '@mui/material';

export const StyledDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: theme.shape.borderRadius * 2,
        padding: theme.spacing(1),
        minWidth: theme.typography.pxToRem(340),
        boxShadow: theme.shadows[10],
    },
}));

export const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
    paddingBottom: theme.spacing(8),
}));

export const StyledDialogContentText = styled(DialogContentText)(() => ({
    textWrap: 'pretty',
}));

export const StyledDialogActions = styled(DialogActions)(({ theme }) => ({
    paddingInline: theme.spacing(3),
}));
