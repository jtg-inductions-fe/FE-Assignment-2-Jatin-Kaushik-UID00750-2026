import { Navigate, Outlet } from 'react-router-dom';

import { FullScreenLoader } from '@components/FullScreenLoader/FullScreenLoader.component';
import { ROUTES } from '@constant';
import { useAppSelector } from '@hooks';
import { UserRole } from '@types';

/**
 * Route guard component that enforces role-based access control (RBAC).
 */

export const RoleGuard = ({ allowedRoles }: { allowedRoles: UserRole[] }) => {
    const { currentUser, isAuthenticated, status } = useAppSelector(
        (state) => state.auth,
    );

    if (status === 'loading') return <FullScreenLoader message="Loading..." />;

    if (!isAuthenticated || !currentUser) {
        return <Navigate to={ROUTES.LOGIN} replace />;
    }

    if (!allowedRoles.includes(currentUser.role)) {
        return <Navigate to={ROUTES.DISCOVERY} replace />;
    }

    return <Outlet />;
};
