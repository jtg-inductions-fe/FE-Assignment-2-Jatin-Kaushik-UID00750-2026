import {
    setConfirmResolve,
    showConfirmDialogAction,
} from '@store/slices/uiSlice';
import { ConfirmDialogPayload } from '@types';

import { useAppDispatch } from './storeHooks';

export const useConfirmDialog = () => {
    const dispatch = useAppDispatch();

    const confirm = (options: ConfirmDialogPayload): Promise<boolean> =>
        new Promise((resolve) => {
            setConfirmResolve(resolve);
            dispatch(showConfirmDialogAction(options));
        });

    return confirm;
};
