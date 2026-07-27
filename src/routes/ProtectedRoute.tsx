import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { ROUTES } from '@constant';

import FullScreenLoader from './FullScreenLoader';
import { useMockAuth } from '../hooks/useMockAuth';

const ProtectedRoute = () => {
    const { isAuthenticated, isLoading } = useMockAuth();
    const location = useLocation();

    if (isLoading) return <FullScreenLoader message="Loading..." />;

    if (!isAuthenticated) {
        return (
            <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />
        );
    }

    return <Outlet />;
};
export default ProtectedRoute;
