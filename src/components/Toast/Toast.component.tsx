import { useAppDispatch, useAppSelector } from '@hooks';
import { hideToastAction } from '@store/slices/uiSlice';

import { StyledAlert, StyledSnackbar } from './Toast.styles';

export const Toast = () => {
    const dispatch = useAppDispatch();

    const { open, message, type, duration } = useAppSelector(
        (state) => state.ui.toast,
    );

    const handleClose = (reason?: string) => {
        if (reason === 'clickaway') return;
        dispatch(hideToastAction());
    };

    return (
        <StyledSnackbar
            open={open}
            autoHideDuration={duration}
            onClose={() => handleClose()}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
            <StyledAlert onClose={() => handleClose()} severity={type}>
                {message}
            </StyledAlert>
        </StyledSnackbar>
    );
};
