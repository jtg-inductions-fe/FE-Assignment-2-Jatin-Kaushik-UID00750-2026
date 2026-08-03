import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from '@constant';
import { useAppSelector } from '@hooks';

/**
 * Route guard component that restricts access to unauthenticated users only.
 */
export const PublicOnlyRoutesGuard = () => {
    const { isAuthenticated } = useAppSelector((state) => state.auth);

    if (isAuthenticated) {
        return <Navigate to={ROUTES.DISCOVERY} replace />;
    }

    return <Outlet />;
};
