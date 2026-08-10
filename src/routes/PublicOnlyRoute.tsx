import { Navigate, Outlet } from 'react-router-dom';

import { FullScreenLoader } from '@components/FullScreenLoader/FullScreenLoader.component';
import { ROUTES } from '@constant';

import { useMockAuth } from '../mocks/hooks/useMockAuth';

/**
 * Route guard component that restricts access to unauthenticated users only.
 */
export const PublicOnlyRoute = () => {
    // Replace with actual Redux state selector later
    const { isAuthenticated, status } = useMockAuth();

    if (status === 'loading') return <FullScreenLoader message="Loading..." />;

    if (isAuthenticated) {
        return <Navigate to={ROUTES.DISCOVERY} replace />;
    }

    return <Outlet />;
};
