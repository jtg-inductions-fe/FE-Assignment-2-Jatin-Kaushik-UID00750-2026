import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { ROUTES } from '@constant';

import FullScreenLoader from './FullScreenLoader';
import { useMockAuth } from '../mocks/hooks/useMockAuth';

const ProtectedRoute = () => {
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
export default ProtectedRoute;
