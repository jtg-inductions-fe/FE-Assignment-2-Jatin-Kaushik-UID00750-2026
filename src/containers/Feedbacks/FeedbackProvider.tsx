import { ConfirmDialog } from '@containers/ConfirmDialog/ConfirmDialog';
import { Toast } from '@containers/Toast/Toast';

/**
 * Container provider that mounts standard toast alert banners and interactive modal dialog screens.
 */

const FeedbackProvider = () => (
    <>
        <Toast />
        <ConfirmDialog />
    </>
);

export default FeedbackProvider;
