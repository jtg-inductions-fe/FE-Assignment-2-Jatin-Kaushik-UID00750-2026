import { showToastAction } from '@store/slices/uiSlice';
import { UseToastOptions } from '@types';

import { useAppDispatch } from './storeHooks';

export const useToast = () => {
    const dispatch = useAppDispatch();

    const triggerToast = ({
        message,
        type = 'info',
        duration = 4000,
    }: UseToastOptions) => {
        dispatch(showToastAction({ message, type, duration }));
    };

    return triggerToast;
};
