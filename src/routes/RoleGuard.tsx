import { Navigate, Outlet } from 'react-router-dom';

import { FullScreenLoader } from '@components/FullScreenLoader/FullScreenLoader.component';
import { ROUTES } from '@constant';

import { useMockAuth } from '../mocks/hooks/useMockAuth';

interface RoleGuardProps {
    allowedRoles: ('customer' | 'owner')[];
}

type Role = 'customer' | 'owner';

/**
 * Route guard component that enforces role-based access control (RBAC).
 * @param props - Component properties
 * @param props.allowedRoles - Authorized roles for access
 */

export const RoleGuard = ({ allowedRoles }: RoleGuardProps) => {
    const { currentUser, isAuthenticated, status } = useMockAuth();

    if (status === 'loading') return <FullScreenLoader message="Loading..." />;

    if (!isAuthenticated || !currentUser) {
        return <Navigate to={ROUTES.LOGIN} replace />;
    }

    if (!allowedRoles.includes(currentUser.role as Role)) {
        return <Navigate to={ROUTES.DISCOVERY} replace />;
    }

    return <Outlet />;
};
