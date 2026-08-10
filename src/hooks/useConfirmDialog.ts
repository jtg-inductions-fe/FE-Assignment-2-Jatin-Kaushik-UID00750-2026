import { setConfirmResolve } from '@services/confirmDialogService';
import { showConfirmDialogAction } from '@store/slices/uiSlice';
import { ConfirmDialogPayload } from '@types';

import { useAppDispatch } from './storeHooks';

/**
 * Custom hook to trigger confirmation dialogs across the platform.
 * @returns An async function that resolves to true or false depending on user confirmation.
 */

export const useConfirmDialog = () => {
    const dispatch = useAppDispatch();

    /**
     * Dispatches a modal dialogue window and waits for a user action response.
     * @param options - Visual setup configurations including title text and button labels
     * @returns A promise resolving to true if approved, or false if canceled/closed
     */

    const confirm = (options: ConfirmDialogPayload): Promise<boolean> =>
        new Promise((resolve) => {
            setConfirmResolve(resolve);
            dispatch(showConfirmDialogAction(options));
        });

    return confirm;
};
