import { setConfirmResolve, showConfirmAction } from '@store/uiSlice';
import { ConfirmDialogPayload } from '@types';

import { useAppDispatch } from './storeHooks';

export const useConfirm = () => {
    const dispatch = useAppDispatch();

    const confirm = (options: ConfirmDialogPayload): Promise<boolean> =>
        new Promise((resolve) => {
            setConfirmResolve(resolve);
            dispatch(showConfirmAction(options));
        });

    return confirm;
};
