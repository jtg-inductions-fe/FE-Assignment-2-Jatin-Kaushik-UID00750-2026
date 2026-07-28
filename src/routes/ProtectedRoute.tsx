import { Navigate, Outlet, useLocation } from 'react-router-dom';

import FullScreenLoader from '@components/FullScreenLoader/FullScreenLoader.component';
import { ROUTES } from '@constant';

import { useMockAuth } from '../mocks/hooks/useMockAuth';

export const ProtectedRoute = () => {
    const { isAuthenticated, status } = useMockAuth();
    const location = useLocation();

    if (status === 'loading') return <FullScreenLoader message="Loading..." />;

    if (!isAuthenticated) {
        return (
            <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />
        );
    }

    return <Outlet />;
};
