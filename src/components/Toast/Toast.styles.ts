import { Alert, Snackbar } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledSnackbar = styled(Snackbar)(({ theme }) => ({
    bottom: theme.spacing(4),
    right: theme.spacing(4),
    zIndex: theme.zIndex.snackbar,
}));

export const StyledAlert = styled(Alert)(({ theme }) => ({
    width: '100%',
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    fontWeight: theme.typography.fontWeightMedium,
}));
