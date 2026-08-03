import { useCallback, useState } from 'react';

import { ConfirmDialogState } from '@types';

/**
 * Custom hook to trigger confirmation dialogs across the platform.
 */

export const useConfirmDialog = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [config, setConfig] = useState<ConfirmDialogState>({
        title: '',
        message: '',
    });

    /**
     * Opens the dialog and binds custom text options.
     * @param options - Config for the dialog title and message text
     */

    const openConfirmDialog = useCallback((options: ConfirmDialogState) => {
        setConfig(options);
        setIsOpen(true);
    }, []);

    /** Closes the active dialog component. */
    const closeConfirmDialog = useCallback(() => {
        setIsOpen(false);
    }, []);

    return {
        isOpen,
        config,
        openConfirmDialog,
        closeConfirmDialog,
    };
};
