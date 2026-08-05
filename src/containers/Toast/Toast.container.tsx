import { SnackbarCloseReason } from '@mui/material';

import { useAppDispatch, useAppSelector } from '@hooks';
import { hideToastAction } from '@store/slices/uiSlice';

import { StyledAlert, StyledSnackbar } from './Toast.styles';

/**
 * Global application alert notification (toast banner) component.
 * Attaches directly to Redux UI status states to present bottom-right snackbar warnings.
 */

export const Toast = () => {
    const dispatch = useAppDispatch();

    const { open, message, type, duration } = useAppSelector(
        (state) => state.ui.toast,
    );

    /**
     * Handles dismiss alerts and avoids accidental window closures from background clicking actions.
     * @param _event - Triggering document screen event instance
     * @param reason - Context explaining what dismissed the snackbar banner frame
     */

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
