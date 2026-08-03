import { ConfirmDialog } from '@components/ConfirmDialog/ConfirmDialog.component';
import { ProfileMenu } from '@components/ProfileMenu/ProfileMenu.component';
import {
    useAppDispatch,
    useAppSelector,
    useConfirmDialog,
    useToast,
} from '@hooks';
import { logout } from '@store/slices/authSlice';

/**
 * Container component handling data fetching and logout workflows for ProfileMenu.
 */

const ProfileMenuContainer = () => {
    const dispatch = useAppDispatch();
    const { currentUser } = useAppSelector((state) => state.auth);
    const { isOpen, config, openConfirmDialog, closeConfirmDialog } =
        useConfirmDialog();
    const toast = useToast();

    /** Opens the local confirm modal overlay to prompt user logout verification. */
    const handleLogoutClick = () => {
        openConfirmDialog({
            title: 'Are you sure you want to log out?',
            message:
                'You will need to sign in again with your credentials to access your account.',
        });
    };

    /** Dismisses the confirmation modal and leaves the user session untouched. */
    const handleLogoutCancel = () => {
        closeConfirmDialog();
        toast({ message: 'Stayed signed in', type: 'info' });
    };

    /** Clears user session records from the store and dismisses the active modal. */
    const handleLogoutConfirm = () => {
        closeConfirmDialog();
        dispatch(logout());
        toast({ message: 'Successfully signed out', type: 'success' });
    };

    const userDisplayName = currentUser?.name || 'User';
    const userEmail = currentUser?.email || '';

    return (
        <>
            <ProfileMenu
                userDisplayName={userDisplayName}
                userEmail={userEmail}
                onLogoutClick={handleLogoutClick}
            />
            <ConfirmDialog
                open={isOpen}
                title={config.title}
                message={config.message}
                handleCancel={handleLogoutCancel}
                handleConfirm={handleLogoutConfirm}
            />
        </>
    );
};

export default ProfileMenuContainer;
