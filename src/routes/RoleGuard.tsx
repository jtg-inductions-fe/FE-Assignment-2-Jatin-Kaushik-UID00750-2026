import { Navigate, Outlet } from 'react-router-dom';

import FullScreenLoader from '@components/FullScreenLoader/FullScreenLoader.component';
import { ROUTES } from '@constant';
import { useAppSelector } from '@hooks';

interface RoleGuardProps {
    allowedRoles: ('customer' | 'owner')[];
}

type Role = 'customer' | 'owner';

export const RoleGuard = ({ allowedRoles }: RoleGuardProps) => {
    const { currentUser, isAuthenticated, status } = useAppSelector(
        (state) => state.auth,
    );

    if (status === 'loading') return <FullScreenLoader message="Loading..." />;

    // Safety fallback if a user somehow slips through the ProtectedRoute gate
    if (!isAuthenticated || !currentUser) {
        return <Navigate to={ROUTES.LOGIN} replace />;
    }

    // If the user's role isn't explicitly permitted, kick them back to Discovery "/"
    if (!allowedRoles.includes(currentUser.role as Role)) {
        return <Navigate to={ROUTES.DISCOVERY} replace />;
    }

    return <Outlet />; // Renders the nested routes safely
};
