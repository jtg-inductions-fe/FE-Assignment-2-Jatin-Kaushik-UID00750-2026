import { useCallback } from 'react';

import { showToastAction } from '@store/slices/uiSlice';
import { UseToastOptions } from '@types';

import { useAppDispatch } from './storeHooks';

/**
 * Custom hook to trigger toast notifications.
 */

export const useToast = () => {
    const dispatch = useAppDispatch();

    /**
     * Dispatches an alert banner payload to the UI store.
     */

    const triggerToast = useCallback(
        ({ message, type = 'info', duration = 4000 }: UseToastOptions) => {
            dispatch(showToastAction({ message, type, duration }));
        },
        [dispatch],
    );

    return triggerToast;
};
