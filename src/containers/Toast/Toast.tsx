import { SnackbarCloseReason } from '@mui/material';

import { useAppDispatch, useAppSelector } from '@hooks';
import { hideToastAction } from '@store/slices/uiSlice';

import { StyledAlert, StyledSnackbar } from './Toast.styles';

export const Toast = () => {
    const dispatch = useAppDispatch();

    const { open, message, type, duration } = useAppSelector(
        (state) => state.ui.toast,
    );

    const handleClose = (
        _event: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') return;
        dispatch(hideToastAction());
    };

    return (
        <StyledSnackbar
            open={open}
            autoHideDuration={duration}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
            <StyledAlert onClose={(e) => handleClose(e)} severity={type}>
                {message}
            </StyledAlert>
        </StyledSnackbar>
    );
};
