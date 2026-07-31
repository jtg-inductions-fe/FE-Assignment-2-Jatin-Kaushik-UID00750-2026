import { ProfileMenu } from '@components/ProfileMenu/ProfileMenu.component';
import {
    useAppDispatch,
    useAppSelector,
    useConfirmDialog,
    useToast,
} from '@hooks';
import { logout } from '@store/slices/authSlice';

const ProfileMenuContainer = () => {
    const dispatch = useAppDispatch();
    const { currentUser } = useAppSelector((state) => state.auth);
    const showConfirmDialog = useConfirmDialog();
    const toast = useToast();

    const handleLogoutClick = async () => {
        const isConfirmed = await showConfirmDialog({
            title: 'Are you sure you want to log out?',
            message:
                'You will need to sign in again with your credentials to access your account.',
        });

        if (!isConfirmed) {
            toast({ message: 'Stayed signed in', type: 'info' });
            return;
        }

        try {
            dispatch(logout());
            toast({ message: 'Successfully signed out', type: 'success' });
        } catch {
            toast({ message: 'Log out failed', type: 'error' });
        }
    };

    const userDisplayName = currentUser?.name || 'User';
    const userEmail = currentUser?.email || '';

    return (
        <ProfileMenu
            userDisplayName={userDisplayName}
            userEmail={userEmail}
            onLogoutClick={handleLogoutClick}
        />
    );
};

export default ProfileMenuContainer;
